// Types
import { ISaleData } from "types/Sale.model";

export interface IDashboardData {
  totalSales: number;
  totalStores: number;
  totalProducts: number;
  totalAmountInventory: number;
  latestSales: ISaleData[];
}
