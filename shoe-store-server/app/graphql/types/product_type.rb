# frozen_string_literal: true

module Types
  class ProductType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :inventories, [Types::ProductInventoryType], null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :total_of_stores, Integer
    field :total_of_inventories, Integer
    field :total_of_stores_low_inventory, Integer
    field :total_of_stores_medium_inventory, Integer
    field :total_of_stores_high_inventory, Integer
    field :total_sales, Integer, null: true
    field :percentage_of_sales, Float, null: true
    field :percentage_of_inventory, Float, null: true

    def total_of_stores
      Store.includes(:inventories).where("inventories.product_id": object[:id]).length
    end

    def total_of_inventories
      Store.includes(:inventories).where("inventories.product_id": object[:id]).sum("amount")
    end

    def total_of_stores_low_inventory
      Store.includes(:inventories).where("inventories.product_id": object[:id]).where("inventories.amount <= 30").length
    end

    def total_of_stores_medium_inventory
      Store.includes(:inventories).where("inventories.product_id": object[:id]).where("inventories.amount > 30 AND inventories.amount <= 70").length
    end

    def total_of_stores_high_inventory
      Store.includes(:inventories).where("inventories.product_id": object[:id]).where("inventories.amount > 70 AND inventories.amount <= 100").length
    end

    def total_sales
      Sale.where("sales.product_id": object[:id]).count
    end

    def percentage_of_sales
      total_sales = Sale.sum("amount")
      product_sales = Sale.where("sales.product_id": object[:id]).sum("amount")
      ((product_sales*100.0)/total_sales)
    end

    def percentage_of_inventory
      total_inventory = ProductInventory.sum("amount")
      product_inventory = Store.includes(:inventories).where("inventories.product_id": object[:id]).sum("inventories.amount")
      ((product_inventory*100.0)/total_inventory)
    end


  end
end
