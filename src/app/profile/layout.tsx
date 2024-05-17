import React from "react";
import { Metadata } from "next";

import AuthLayout from "@/layout/AuthLayout";

export const metadata: Metadata = {
  title: "Profile - SUSHI SHOP",
};

const Protectedlayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Protectedlayout;
