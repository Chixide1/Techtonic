import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
export const title = "Techtonic Blog"

const metadata: Metadata = {
  title: title,
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
