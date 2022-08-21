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
          
          product_created_id = product_created["id"]

          store_created_id = store_created["id"]
          inventory_is_created = ProductInventory.find_by(store_id: store_created_id, product_id: product_created_id)
          if inventory_is_created
            inventory_is_created.amount = inventory_amount
            inventory_is_created.save
          else
            ProductInventory.create(store_id: store_created_id, product_id: product_created_id, amount: inventory_amount)
          end
        end
      }
    end
    at_exit { thread.exit }
  end
end
