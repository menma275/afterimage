import type { Metadata } from "next";
import { Inter, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const shippori = Shippori_Mincho({ subsets: ["latin"], weight: "800" });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
