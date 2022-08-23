class ProductInventory < ApplicationRecord
    belongs_to :product
    belongs_to :store

    after_save :retrieve_suggestions
    
    def retrieve_suggestions
        InventorySuggestionsJob.set(wait: 3.minute).perform_later
    end
end
