import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface IProductInput {
  register: UseFormRegister<IProduct>;
  errors: FieldErrors<IProduct>;
}
