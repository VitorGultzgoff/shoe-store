# frozen_string_literal: true

module Types
  class StoreType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :inventories, [Types::ProductInventoryType], null: true
    field :sales, [Types::SaleType], null: true
    field :total_of_products, Integer
    field :total_of_inventories, Integer
    field :total_of_products_low_inventory, Integer
    field :total_of_products_medium_inventory, Integer
    field :total_of_products_high_inventory, Integer
    field :total_sales, Integer, null: true
    field :percentage_of_sales, Float, null: true
    field :percentage_of_inventory, Float, null: true

    def total_of_products
      Product.includes(:inventories).where("inventories.store_id": object[:id]).length
    end

    def total_of_inventories
      Product.includes(:inventories).where("inventories.store_id": object[:id]).sum("amount")
    end

    def total_of_products_low_inventory
      Product.includes(:inventories).where("inventories.store_id": object[:id]).where("inventories.amount <= 30").length
    end

    def total_of_products_medium_inventory
      Product.includes(:inventories).where("inventories.store_id": object[:id]).where("inventories.amount > 30 AND inventories.amount <= 70").length
    end

    def total_of_products_high_inventory
      Product.includes(:inventories).where("inventories.store_id": object[:id]).where("inventories.amount > 70 AND inventories.amount <= 100").length
    end

    def total_sales
      Sale.where("sales.store_id": object[:id]).count
    end

    def percentage_of_sales
      total_sales = Sale.sum("amount")
      store_sales = Sale.where("sales.store_id": object[:id]).sum("amount")
      ((store_sales*100.0)/total_sales)
    end

    def percentage_of_inventory
      total_inventory = ProductInventory.sum("amount")
      store_inventory = Product.includes(:inventories).where("inventories.store_id": object[:id]).sum("inventories.amount")
      ((store_inventory*100.0)/total_inventory)
    end
  end
end
