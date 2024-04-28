import { HTTPStatus } from "@/constants/httpStatus";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";

interface IData {
  error?: string;
  message?: string;
  statusCode?: number;
}

export const showAuthError = (err: FetchBaseQueryError) => {
  const data: IData = err.data as IData;

  if (err?.status === HTTPStatus.BADREQUEST) {
    return toast.error(data.message);
  }
  if (err?.status === HTTPStatus.UNAUTHORIZED) {
    return toast.warning(data.message);
  }
  if (err?.status === HTTPStatus.FORBIDDEN) {
    return toast.error(data?.message);
  }
  if (err?.status === HTTPStatus.CONFLICT) {
    return toast.warning(data?.message);
  }
  if (err?.status === "FETCH_ERROR") {
    return toast.error("Произошла ошибка. Войдите ещё раз или позже");
  }
  toast.error(
    `${err?.data} || "Произошла ошибка. Попробуйте ещё раз или позже"`
  );
};
