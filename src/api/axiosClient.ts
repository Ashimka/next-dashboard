"use client";
import axios from "axios";

const axiosApi = axios.create({
  withCredentials: true,
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export default axiosApi;
