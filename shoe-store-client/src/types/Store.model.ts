// Types
import { IProductInventoryData } from "types/ProductInventory.model";

export interface IStoreData {
  id: string;
  name: string;
  percentageOfInventory?: number;
  percentageOfSales?: number;
  totalSales: number;
  totalOfInventories?: number;
  totalOfProducts?: number;
  totalOfProductsLowInventory?: number;
  totalOfProductsMediumInventory?: number;
  totalOfProductsHighInventory?: number;
  inventories: IProductInventoryData[];
}
