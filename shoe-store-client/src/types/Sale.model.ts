// Types
import { IProductData } from "types/Product.model";
import { IStoreData } from "types/Store.model";

export interface ISaleData {
  id: number;
  createdAt: string;
  amount: number;
  store: IStoreData;
  product: IProductData;
}
