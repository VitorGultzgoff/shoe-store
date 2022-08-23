class InventorySuggestionsJob < ApplicationJob
  queue_as :default

  def perform(*args)
    all_suggestions = ProductInventorySuggestion.all

    # Sync the suggestions according to the updated inventories
    for actual_suggestion in all_suggestions
      p actual_suggestion_source_amount = ProductInventory.find(actual_suggestion["inv_sugg_src_id"])["amount"]
      p actual_suggestion_target_amount = ProductInventory.find(actual_suggestion["inv_sugg_target_id"])["amount"]
      if actual_suggestion_target_amount > 30 || actual_suggestion_source_amount <=70
        actual_suggestion.destroy
      end
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
  end

end
