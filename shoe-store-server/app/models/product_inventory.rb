class ProductInventory < ApplicationRecord
    belongs_to :product
    belongs_to :store

    after_save :retrieve_suggestions
    
    def retrieve_suggestions
        InventorySuggestionsJob.perform_now
    end
end
