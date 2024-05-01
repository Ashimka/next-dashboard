import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface ICatInputs {
  category: string;
}
export interface ICatPageInput {
  register: UseFormRegister<ICatInputs>;
  errors: FieldErrors<ICatInputs>;
}
