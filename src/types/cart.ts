import { IProduct } from "./product";

export interface ICart {
  id?: number;
  count: number;
  product: IProduct;
  userId?: string;
  productId?: string;
}

export interface IUpdateCart {
  id?: number;
  productId?: string;
  options?: string;
}
