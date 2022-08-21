# frozen_string_literal: true

module Types
  class StoreType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :inventories, [Types::ProductInventoryType], null: true
    field :total_of_products, Integer
    field :total_of_products_low_inventory, Integer
    field :total_of_products_medium_inventory, Integer
    field :total_of_products_high_inventory, Integer

    def total_of_products
      Product.includes(:inventories).where("inventories.store_id": object[:id]).length
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
  end
end
