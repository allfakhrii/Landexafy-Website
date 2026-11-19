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
      { url: "/landexafy-logo.webp?v=1", type: "image/webp" },
      { url: "/logo.webp?v=1", type: "image/webp" },
      { url: "/favicon.ico?v=1", sizes: "any" },
    ],
    shortcut: "/landexafy-logo.webp?v=1",
    apple: "/landexafy-logo.webp?v=1",
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
        <link rel="icon" href="/landexafy-logo.webp?v=1" type="image/webp" />
        <link rel="shortcut icon" href="/landexafy-logo.webp?v=1" />
        <link rel="apple-touch-icon" href="/landexafy-logo.webp?v=1" />
      </head>
      <body className="min-h-screen font-sans antialiased overflow-x-clip selection:bg-[#15803d] selection:text-white" suppressHydrationWarning>
        <LanguageWrapper>{children}</LanguageWrapper>
      </body>
    </html>
  );
}
