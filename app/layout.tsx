import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Theme from "@/utils/providers/ThemeProvider";
import UserPreferencesProvider from "@/utils/providers/UserPreferencesProvider";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typersi",
  appleWebApp: {
    title: "Typersi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${interSans.variable} antialiased min-h-screen bg-background overflow-y-auto overflow-x-hidden`}
      >
        <Theme>
          <UserPreferencesProvider>{children}</UserPreferencesProvider>
        </Theme>
      </body>
    </html>
  );
}
