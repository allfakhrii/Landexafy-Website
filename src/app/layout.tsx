import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landexafy | Solusi Bisnis & Website Modern",
  description: "Landexafy membangun website cepat, responsif, dan elegan untuk transformasi bisnis modern dan personal branding.",
  icons: {
    icon: [
      { url: "/landexafy-logo.png?v=1", type: "image/png" },
      { url: "/logo.png?v=1", type: "image/png" },
      { url: "/favicon.ico?v=1", sizes: "any" },
    ],
    shortcut: "/landexafy-logo.png?v=1",
    apple: "/landexafy-logo.png?v=1",
  },
};

import LanguageWrapper from "@/components/LanguageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="light" className={`${inter.variable} scroll-smooth light`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/landexafy-logo.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/landexafy-logo.png?v=1" />
        <link rel="apple-touch-icon" href="/landexafy-logo.png?v=1" />
      </head>
      <body className="min-h-screen font-sans antialiased overflow-x-clip selection:bg-[#C6F432] selection:text-[#0B0B0C]" suppressHydrationWarning>
        <LanguageWrapper>{children}</LanguageWrapper>
      </body>
    </html>
  );
}
