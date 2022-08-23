class Product < ApplicationRecord
    has_many :inventories, foreign_key: "product_id", class_name: "ProductInventory"
    has_many :sales, foreign_key: "store_id", class_name: "Sale"
end
