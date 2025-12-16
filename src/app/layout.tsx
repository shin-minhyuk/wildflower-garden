import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus, Gowun_Batang } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBookingButton from "@/components/FixedBookingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "들꽃치유정원 - 자연 속의 휴식",
  description: "들꽃치유정원에서 진정한 휴식과 치유를 경험하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellus.variable} ${gowunBatang.variable} antialiased font-sans text-foreground bg-background`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FixedBookingButton />
      </body>
    </html>
  );
}
