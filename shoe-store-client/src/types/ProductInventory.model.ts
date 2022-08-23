// Types
import { IProductData } from "types/Product.model";
import { IStoreData } from "types/Store.model";

export interface IProductInventoryData {
  id: string;
  amount: number;
  product?: IProductData;
  store?: IStoreData;
}
