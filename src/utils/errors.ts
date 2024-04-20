import { isAxiosError } from "axios";
import { HTTPStatus } from "@/constants/httpStatus";
import { toast } from "react-toastify";

export const showAuthError = (error: unknown) => {
  if (isAxiosError(error)) {
    if (error?.response?.status === HTTPStatus.BADREQUEST) {
      return toast.error(error?.response.data.message);
    }
    if (error?.response?.status === HTTPStatus.UNAUTHORIZED) {
      return toast.warning(error?.response.data.message);
    }
    if (error?.response?.status === HTTPStatus.FORBIDDEN) {
      return toast.error(error?.response.data.message);
    }
    if (error?.response?.status === HTTPStatus.CONFLICT) {
      return toast.error(error?.response.data.message);
    }
    toast.error(error?.message);
  }
};
