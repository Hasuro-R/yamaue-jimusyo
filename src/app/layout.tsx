import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "山上登記測量事務所",
  description: "山上 博隆の登記測量事務所です。",
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
