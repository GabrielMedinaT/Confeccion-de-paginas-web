import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proyecto Gabriel",
  description: "Aprendiendo Next.js",
  keawords: "nextjs, react, javascript, css, html",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
