// Types
import { ISaleData } from "types/Sale.model";
import { IStoreData } from "types/Store.model";
import { IProductData } from "types/Product.model";
import { IProductInventoryData } from "types/ProductInventory.model";

export interface IDashboardData {
  totalSales: number;
  totalStores: number;
  totalProducts: number;
  totalAmountInventory: number;
  latestSales: ISaleData[];
  stores: IStoreData[];
}

export interface IStoresData {
  stores: IStoreData[];
}

export interface IStoreDetailData {
  store: IStoreData;
}

export interface IProductsData {
  products: IProductData[];
}

export interface IProductDetailData {
  product: IProductData;
}

export interface IProductSuggestionData {
  id: string;
  suggestionSource: IProductInventoryData;
  suggestionTarget: IProductInventoryData;
}

export interface IProductSuggestionsData {
  productSuggestions: IProductSuggestionData[];
}
