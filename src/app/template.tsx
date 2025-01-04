"use client";

import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { useAtom } from "jotai";
import { isScrollInvalidState } from "@/atoms/atoms";

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
      {children}
    </body>
  );
}
