class CreateProductInventorySuggestions < ActiveRecord::Migration[7.0]
  def change
    create_table :product_inventory_suggestions do |t|

      t.references :inv_sugg_src, foreign_key: { to_table: "product_inventories" }
      t.references :inv_sugg_target, foreign_key: { to_table: "product_inventories" }
      t.timestamps
    end
  end
end
