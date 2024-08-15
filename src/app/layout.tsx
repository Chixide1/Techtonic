import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "An example blog application",
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
