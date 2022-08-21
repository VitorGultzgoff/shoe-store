class Product < ApplicationRecord
    has_many :inventories, foreign_key: "product_id", class_name: "ProductInventory"
    has_many :sales, foreign_key: "store_id", class_name: "Sale"

    after_create :register_update
    after_save :register_update

    private
    def register_update
        ActionCable.server.broadcast("databridge_channel", {type: "product_updated" })
    end
end
