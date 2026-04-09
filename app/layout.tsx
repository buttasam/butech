import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuTech s.r.o. | Detektivni technika, TSCM a GPS sledovani vozidel",
  description:
    "Specialiste na detektivni techniku a zabezpeceni. Nabizime odposlechy, skryte kamery, detektory odposlechu a GPS sledovani vozidel. Provadime TSCM prohlidky a bezpecnostni kontroly zarizeni.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
