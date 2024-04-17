import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

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
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="root">
          <div className="menu">
            <Sidebar />
          </div>
          <div className="content">
            <Navbar />
            <main className="main">
              <div className="container">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
