import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface IProfileUser {
  id?: string;
  firstName: string;
  lastName: string;
  address: string;
  userId?: string;
}
export interface IProfileUpdate {
  firstName?: string;
  lastName?: string;
  address?: string;
}
export interface IProfileInputs {
  register: UseFormRegister<IProfileUser>;
  setValue?: UseFormSetValue<IProfileUser>;
  errors: FieldErrors<IProfileUser>;
  data?: IProfileUser;
}
