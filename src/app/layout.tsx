import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import AntdRegistry from "@/lib/antd.registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AllCommerce Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry >
          {children}
          <ToastContainer />
        </AntdRegistry>
      </body>
    </html>
  );
}