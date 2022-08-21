class Store < ApplicationRecord
    has_many :inventories, foreign_key: "store_id", class_name: "ProductInventory"
    
    after_create :register_update
    after_save :register_update

    private
    def register_update
        ActionCable.server.broadcast("databridge_channel", {type: "stores_updated" })
    end
end
