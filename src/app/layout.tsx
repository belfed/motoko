import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motoko",
  description:
    "A modern Kakeibo app for mindful budgeting and expense tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
