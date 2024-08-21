import type { Metadata } from "next";
import { Inter, Space_Grotesk, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const shippori = Shippori_Mincho({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "afterImage",
  description: "Watch list for movies and TV shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={shippori.className + " " + inter.className}>{children}</body>
    </html>
  );
}
