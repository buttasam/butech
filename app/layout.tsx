import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Butech",
  description: "Jednoduchy staticky web v Next.js pro GitHub Pages."
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
