import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus, Gowun_Batang } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://wildflowergarden.co.kr"),
  title: {
    default: "들꽃치유정원 | 자연 속의 온전한 휴식",
    template: "%s | 들꽃치유정원",
  },
  description:
    "양평에 위치한 들꽃치유정원은 아이들을 위한 자연 체험 학습과 어른들을 위한 치유 프로그램을 제공합니다. 갤러리, 텃밭 체험, 반려식물 만들기 등 다양한 힐링 활동을 경험해보세요.",
  keywords: [
    "들꽃치유정원",
    "야생화",
    "치유정원",
    "체험학습",
    "양평 가볼만한곳",
    "어린이 체험",
    "유치원 현장학습",
    "힐링",
    "치유농업",
    "반려식물",
  ],
  openGraph: {
    title: "들꽃치유정원 | 자연 속의 온전한 휴식",
    description:
      "양평 들꽃치유정원에서 아이들과 함께 특별한 자연 체험을 즐겨보세요.",
    url: "https://wildflowergarden.co.kr",
    siteName: "들꽃치유정원",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/image/main_1.jpg",
        width: 1200,
        height: 630,
        alt: "들꽃치유정원 전경",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "들꽃치유정원",
    description: "자연이 주는 위로, 들꽃치유정원입니다.",
    images: ["/image/main_1.jpg"],
  },
  verification: {
    other: {
      "naver-site-verification": "navere8fd1b3553d475eebc6500da1f14dd09",
    },
  },
  alternates: {
    canonical: "https://wildflowergarden.co.kr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "들꽃치유정원",
  description:
    "양평에 위치한 들꽃치유정원은 아이들을 위한 자연 체험 학습과 어른들을 위한 치유 프로그램을 제공합니다.",
  url: "https://wildflowergarden.co.kr",
  image: "https://wildflowergarden.co.kr/image/main_1.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "양평군",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.4912,
    longitude: 127.4875,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellus.variable} ${gowunBatang.variable} antialiased font-sans text-foreground bg-background`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* TODO: 카톡 비즈 심사 때문에 잠시 주석 */}
        {/* <FixedBookingButton /> */}
      </body>
    </html>
  );
}
