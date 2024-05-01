import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { ReduxProvider } from "@/store/ReduxProvider";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUSHI SHOP",
  description: "Суши & роллы | Суши бар",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="ru">
        <body className={roboto.className}>
          {children}
          <ToastContainer
            position="top-left"
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            limit={1}
            theme="colored"
          />
        </body>
      </html>
    </ReduxProvider>
  );
}
