class Product < ApplicationRecord
    has_many :inventories, foreign_key: "product_id", class_name: "ProductInventory"
end
