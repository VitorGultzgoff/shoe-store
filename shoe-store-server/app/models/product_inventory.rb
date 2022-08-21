class ProductInventory < ApplicationRecord
    belongs_to :product
    belongs_to :store

    after_create :register_update
    after_save :register_update

    private
    def register_update
        ActionCable.server.broadcast("databridge_channel", {type: "product_inventory_updated" })
    end
end
