import type { Metadata } from "next";
import "./globals.css";
import { fontMontserrat, fontPrata } from "@/components/font/fonts";
import SessionProvider from "@/components/sessions/provider";
import { getServerSession } from "next-auth";
import NavMenu from "@/components/nav";
export const metadata: Metadata = {
  title: "Nextjs-Auth",
  description: "Auth",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={`${fontMontserrat.variable} ${fontPrata.variable} antialiased`}
      >
        <SessionProvider session={session}>
        <main className="mx-auto max-w-5xl text-2xl flex gap-2 text-white">
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
