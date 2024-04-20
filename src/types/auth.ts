import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IInputs {
  phone: string;
  password: string;
}
export interface IAuthPageInput {
  register: UseFormRegister<IInputs>;
  errors: FieldErrors<IInputs>;
}
export interface ISignInFn {
  url: string;
  phone: string;
  password: string;
}
