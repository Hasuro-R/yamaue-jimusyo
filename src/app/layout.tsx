import type { Metadata } from "next";
import "./globals.scss";

const title = "山上登記測量事務所";
const description = "山上 博隆の登記測量事務所です。";
const url = "https://yamauetakahiro.com";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: {
      default: title,
      template: `%s - ${title}`,
    },
    description,
    url,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: title,
      template: `%s - ${title}`,
    },
    description,
    creator: '@HASURO_dev',
  },
  verification: {
    google: "EaRzaToN8Od80w_p6Fg6xIL0s-PYYCiPNvTND1AZLkM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {children}
    </html>
  );
}
