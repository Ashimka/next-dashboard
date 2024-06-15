import { IProduct } from "./product";

export interface ICart {
  id?: number;
  count: number;
  product?: IProduct;
  userId?: string;
  productId?: string;
}
