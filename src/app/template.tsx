"use client";

import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { useAtom } from "jotai";
import { isScrollInvalidState } from "@/atoms/atoms";
import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode,
}) {
  const [isScrollInvalid] = useAtom(isScrollInvalidState);

  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ overflow: isScrollInvalid ? "hidden" : "auto" }}
    >
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
}
