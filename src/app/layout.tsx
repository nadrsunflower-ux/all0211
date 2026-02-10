import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2월 11일 전체 회의 - 이벤트 & 마케팅팀",
  description: "ANTIGRAVITY 이벤트 & 마케팅팀 전체회의록",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff5f9]`}
        style={{ backgroundColor: "#fff5f9" }}
      >
        {children}
      </body>
    </html>
  );
}
