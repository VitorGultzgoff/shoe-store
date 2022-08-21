module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :stores, [StoreType], null: true
    def stores
      Store.all.order('name ASC')
    end

    field :store, StoreType, null: true do
      argument :id, ID, required: true
    end
    def store(id:)
      Store.find(id)
    end

    field :products, [ProductType], null: true
    def products
      Product.all.order('name ASC')
    end

    field :product, ProductType, null: true do
      argument :id, ID, required: true
    end
    def product(id:)
      Product.find(id)
    end

  end
end
