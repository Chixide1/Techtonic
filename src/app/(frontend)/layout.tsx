import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import React from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techtonic Blog",
  description: "An example blog application",
  openGraph: {
    title: "Techtonic Blog",
    description: "An example blog application",
    images: [{url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtonic.ckdoestech.com"}/techtonic.jpg?v=1`, width: 1200, height: 630, alt: "Techtonic Blog"}],
    siteName: 'Techtonic',
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-w-[400px] dark:bg-background dark:text-foreground`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>  
      </body>
    </html>
  );
}
