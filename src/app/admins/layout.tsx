import React from "react";
import { Metadata } from "next";

import AdminLayout from "@/layout/AdminLayout";

export const metadata: Metadata = {
  title: "ADMIN ПАНЕЛЬ",
  description: "Панель администратора",
};

const AdminSidebar = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminSidebar;
