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

    field :sales, [SaleType], null: true
    def sales
      Sale.all.order('created_at DESC')
    end

    field :latest_sales, [SaleType], null: true
    def latest_sales
      Sale.limit(10).order('created_at DESC')
    end

    field :total_stores, Integer, null: true
    def total_stores
      Store.count
    end

    field :total_products, Integer, null: true
    def total_products
      Product.count
    end

    field :total_sales, Integer, null: true
    def total_sales
      Sale.count
    end

    field :total_amount_inventory, Integer, null: true
    def total_amount_inventory
      ProductInventory.sum("amount")
    end

    field :product_suggestions, [ProductInventorySuggestionType], null: true
    def product_suggestions
      ProductInventorySuggestion.all
    end

    field :latest_sales_per_time, GraphQL::Types::JSON, null: true
    def latest_sales_per_time
      current_time = Time.now
      past_20_minutes = Time.now - 20.minute
      Sale.where(:created_at => past_20_minutes..current_time).group_by_minute(:created_at).order("created_at ASC").count
    end

  end
end
