import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-mplus-rounded",
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "リンクまとめ - My Personal HUB",
  description: "わたしの好きと活動、ここに集めました！厳選されたウェブサイト・サービスのコレクション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${mPlusRounded.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}