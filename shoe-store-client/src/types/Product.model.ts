// Types
import { IProductInventoryData } from "types/ProductInventory.model";

export interface IProductData {
  id: string;
  name: string;
  percentageOfInventory?: number;
  percentageOfSales?: number;
  totalSales: number;
  totalOfInventories?: number;
  totalOfStores?: number;
  totalOfStoresLowInventory: number;
  totalOfStoresHighInventory: number;
  totalOfStoresMediumInventory: number;
  inventories: IProductInventoryData[];
}
