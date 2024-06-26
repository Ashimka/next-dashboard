import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface ICatInputs {
  name: string;
}
export interface ICatPageInput {
  register: UseFormRegister<ICatInputs>;
  setValue?: UseFormSetValue<ICatInputs>;
  errors: FieldErrors<ICatInputs>;
}
export interface IResCat {
  id?: number | string;
  name: string;
}
