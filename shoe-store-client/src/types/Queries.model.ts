// Types
import { ISaleData } from "types/Sale.model";
import { IStoreData } from "types/Store.model";
import { IProductData } from "types/Product.model";

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
