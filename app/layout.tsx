import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Za11y — Accessibility Scanner",
  description:
    "Instantly uncover WCAG accessibility issues. Scan any webpage in seconds. Powered by axe-core and running locally in your browser for fast, secure results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-9 w-full">
          <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/za11y-logo.svg" alt="Za11y" height={32} className="h-8 w-auto" />
          </a>
          <a
            href="/privacy-policy"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
