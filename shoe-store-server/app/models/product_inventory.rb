class ProductInventory < ApplicationRecord
    belongs_to :product
    belongs_to :store
end
