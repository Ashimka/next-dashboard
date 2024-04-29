import { jwtDecode } from "jwt-decode";
import { IJWT } from "@/types/jwt";

export const adminRolle = (token: string | null) => {
  const allowedRoles = "ADMIN";
  const decoded: IJWT | undefined = token ? jwtDecode(token) : undefined;

  const roles: string | undefined = decoded?.roles || undefined;

  return roles === allowedRoles;
};
