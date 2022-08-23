class ProductInventorySuggestion < ApplicationRecord
  has_one :inv_sugg_src, foreign_key: "inv_sugg_src_id", class_name: "ProductInventory"
  has_one :inv_sugg_target, foreign_key: "inv_sugg_target_id", class_name: "ProductInventory"
end
