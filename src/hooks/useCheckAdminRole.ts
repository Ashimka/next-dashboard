import { jwtDecode } from "jwt-decode";
import { IJWT } from "@/types/jwt";

type Props = {
  accessToken: string | null;
  allowedRoles: string[];
};

export const adminRolle = ({ accessToken, allowedRoles }: Props) => {
  const decoded: IJWT | undefined = accessToken
    ? jwtDecode(accessToken)
    : undefined;

  const roles: string | undefined = decoded?.roles || undefined;

  return roles && allowedRoles.includes(roles);
};
