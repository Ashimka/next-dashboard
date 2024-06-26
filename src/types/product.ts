import { ChangeEvent } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  categoryId: number;
}
export interface IProductUpdate {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  categoryId?: number;
}

export interface IProductInput {
  register: UseFormRegister<IProduct>;
  setValue?: UseFormSetValue<IProduct>;
  errors: FieldErrors<IProduct>;
  data?: IProduct;
  handleImage?: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onChange?: (...event: any[]) => void;
}
