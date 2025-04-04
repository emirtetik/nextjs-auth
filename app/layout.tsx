import type { Metadata } from "next";
import "./globals.css";
import { fontMontserrat, fontPrata } from "@/components/font/fonts";
export const metadata: Metadata = {
  title: "Nextjs-Auth",
  description: "Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontMontserrat.variable} ${fontPrata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
