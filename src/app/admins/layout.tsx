import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const AdminSidebar = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminSidebar;
