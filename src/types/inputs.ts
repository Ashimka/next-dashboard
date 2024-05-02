import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface ICatInputs {
  name: string;
}
export interface ICatPageInput {
  register: UseFormRegister<ICatInputs>;
  errors: FieldErrors<ICatInputs>;
}
export interface IResCat {
  id: number;
  name: string;
}
