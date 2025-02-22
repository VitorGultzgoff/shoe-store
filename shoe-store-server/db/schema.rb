# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_23_063453) do
  create_table "product_inventories", force: :cascade do |t|
    t.integer "store_id", null: false
    t.integer "product_id", null: false
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_product_inventories_on_product_id"
    t.index ["store_id"], name: "index_product_inventories_on_store_id"
  end

  create_table "product_inventory_suggestions", force: :cascade do |t|
    t.integer "inv_sugg_src_id"
    t.integer "inv_sugg_target_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["inv_sugg_src_id"], name: "index_product_inventory_suggestions_on_inv_sugg_src_id"
    t.index ["inv_sugg_target_id"], name: "index_product_inventory_suggestions_on_inv_sugg_target_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sales", force: :cascade do |t|
    t.integer "store_id", null: false
    t.integer "product_id", null: false
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_sales_on_product_id"
    t.index ["store_id"], name: "index_sales_on_store_id"
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "product_inventories", "products"
  add_foreign_key "product_inventories", "stores"
  add_foreign_key "product_inventory_suggestions", "product_inventories", column: "inv_sugg_src_id"
  add_foreign_key "product_inventory_suggestions", "product_inventories", column: "inv_sugg_target_id"
  add_foreign_key "sales", "products"
  add_foreign_key "sales", "stores"
end
