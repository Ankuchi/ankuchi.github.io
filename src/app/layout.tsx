import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@ankuchi/components/navbar";
import { Footer } from "@ankuchi/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Ankuchi",
  description: "Ankuchi Technologies Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex-col`}>
        <header>
          <NavBar logoUrl="logo.svg" logoUrlAlt="Ankuchi Logo"></NavBar>
        </header>
        <main className="flex">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
