import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";

const encode = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duskire Portfolio",
  description: "Works by Duskire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={encode.className}>{children}</body>
    </html>
  );
}
