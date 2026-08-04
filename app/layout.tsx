import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// @ts-ignore: CSS imports are handled by Next.js at runtime.
import "./globals.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "No Meio de Nós - Crochet",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
