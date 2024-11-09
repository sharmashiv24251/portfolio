import type { Metadata } from "next";
import { sourceCodePro } from "./fonts";
import "./globals.css";
import { Dock } from "@/components/Dock";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Shivansh Sharma",
  description: "Portfolio of Shivansh Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className={`min-h-screen text-white`}>{children}</main>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
