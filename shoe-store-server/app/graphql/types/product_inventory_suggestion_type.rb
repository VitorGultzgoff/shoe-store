# frozen_string_literal: true

module Types
  class ProductInventorySuggestionType < Types::BaseObject
    field :id, ID, null: false
    field :inv_sugg_src_id, Integer
    field :inv_sugg_target_id, Integer
    field :suggestion_source, ProductInventoryType, null: false
    field :suggestion_target, ProductInventoryType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def suggestion_source
      ProductInventory.find(object[:inv_sugg_src_id])
    end

    def suggestion_target
      ProductInventory.find(object[:inv_sugg_target_id])
    end
  end
end
