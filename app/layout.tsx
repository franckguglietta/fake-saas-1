import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swift Social - AI-Powered Advertising Platform",
  description: "Scale your business with intelligent advertising. Manage Google Ads, Facebook, TikTok, and LinkedIn campaigns from one unified platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
