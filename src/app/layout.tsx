// src/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Grids from '../components/Grids';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish Chaurasia",
  description: "Portfolio Website for Harish Chaurasia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grids />
        {children}
      </body>
    </html>
  );
}
