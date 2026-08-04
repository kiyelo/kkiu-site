import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kkiu.3dayweekendlab.com"),
  title: {
    default: "Kkiu Todo",
    template: "%s | Kkiu Todo",
  },
  description:
    "일과 생활을 가볍게 만드는 작은 제품을 만드는 개발 스튜디오입니다.",
  openGraph: {
    type: "website",
    siteName: "Kkiu Todo",
    locale: "ko_KR",
    alternateLocale: "en_US",
    title: "Kkiu Todo",
    description: "See today's tasks clearly and finish them one by one.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kkiu Todo",
    description: "See today's tasks clearly and finish them one by one.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
