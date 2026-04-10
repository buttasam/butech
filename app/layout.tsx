import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { withBasePath } from "./lib/base-path";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "BuTech s.r.o. | Detektivni technika, TSCM a GPS sledovani vozidel",
  description:
    "Specialiste na detektivni techniku a zabezpeceni. Nabizime odposlechy, skryte kamery, detektory odposlechu a GPS sledovani vozidel. Provadime TSCM prohlidky a bezpecnostni kontroly zarizeni.",
  icons: {
    icon: withBasePath("/favicon.svg")
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
