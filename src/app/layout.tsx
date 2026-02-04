import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "앙비떼 롯드 선정 진단기",
  description: "눈매와 속눈썹 상태에 맞는 최적의 롯드를 추천해드려요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
