import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const sfPro = localFont({
  src: "../../public/fonts/SF-Pro-Display-Regular.woff2",
  variable: "--font-sf-pro",
  display: "swap",
});

const acorn = localFont({
  src: "../../public/fonts/Acorn.woff2",
  variable: "--font-acorn",
  display: "swap",
});

const bruce = localFont({
  src: "../../public/fonts/BruceForeverRegular.woff2",
  variable: "--font-bruce",
  display: "swap",
});

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./mtrxk.png" />
      </head>
      <body className={`${inter.className} ${sfPro.variable} ${acorn.variable} ${bruce.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
