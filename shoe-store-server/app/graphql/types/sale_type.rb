# frozen_string_literal: true

module Types
  class SaleType < Types::BaseObject
    field :id, ID, null: false
    field :store_id, Integer, null: false
    field :product_id, Integer, null: false
    field :amount, Integer
    field :store, StoreType, null: false
    field :product, ProductType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
