require 'faye/websocket'
require 'eventmachine'
require 'json'

class SyncDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    thread = Thread.new do
      EM.run {
        ws = Faye::WebSocket::Client.new('ws://localhost:8080/')

        ws.on :message do |event|
          data = JSON.parse(event.data)
          store_name = data["store"]
          product_name = data["model"]
          inventory_amount = data["inventory"]

          store_created = Store.find_or_create_by(name: store_name)
          product_created = Product.find_or_create_by(name: product_name)
          Sale.create(store_id: store_created.id, product_id: product_created.id, amount: inventory_amount)
          
          inventory_saved = ProductInventory.find_or_create_by(store_id: store_created.id, product_id: product_created.id)
          if inventory_saved != inventory_amount
            inventory_saved.amount = inventory_amount
            inventory_saved.save
          end

          # Include new suggestions
          products_with_low_inventory = ProductInventory.where("amount <= 30")
          products_with_high_inventory = ProductInventory.where("amount > 70")
          if products_with_low_inventory && products_with_high_inventory
            for actual_product_with_low_inventory in products_with_low_inventory
              for actual_product_with_high_inventory in products_with_high_inventory
                target_product_name = Product.find(actual_product_with_low_inventory["product_id"])["name"]
                source_product_name = Product.find(actual_product_with_high_inventory["product_id"])["name"]    
                if target_product_name == source_product_name
                  ProductInventorySuggestion.find_or_create_by(inv_sugg_src_id: actual_product_with_high_inventory["id"], inv_sugg_target_id: actual_product_with_low_inventory["id"])
                end
              end
            end
          end

          # Sync the suggestions according to the updated inventories
          all_suggestions = ProductInventorySuggestion.all
          for actual_suggestion in all_suggestions
            actual_suggestion_source_amount = ProductInventory.find(actual_suggestion["inv_sugg_src_id"])["amount"]
            actual_suggestion_target_amount = ProductInventory.find(actual_suggestion["inv_sugg_target_id"])["amount"]
            if actual_suggestion_target_amount > 30 || actual_suggestion_source_amount <=70
              actual_suggestion.destroy
            end
          end

        end
      }
    end
    at_exit { thread.exit }
  end
end
