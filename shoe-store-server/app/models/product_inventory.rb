class ProductInventory < ApplicationRecord
    belongs_to :product
    belongs_to :store
    has_many :product_inventory_suggestions
end
