import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "뷰러펌 롯드 선정 진단기",
  description: "고객 조건에 따른 최적의 뷰러펌 롯드를 추천합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
