import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { cookies } from "next/headers";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./auth/AuthPage";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADMIN ПАНЕЛЬ",
  description: "Панель администратора",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const user = cookieStore.has("AC_Token");

  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="root">
          {user ? (
            <>
              <div className="menu">
                <Sidebar />
              </div>
              <div className="content">
                <Navbar />
                <main className="main">
                  <div className="container">{children}</div>
                </main>
                <Footer />
              </div>
            </>
          ) : (
            <AuthPage />
          )}
        </div>
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
  );
}
