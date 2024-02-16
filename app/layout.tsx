"use client";

import RootView from "@/components/skylauncher/views/root-view";
// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";

import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <RootView>{children}</RootView>
        </Providers>
      </body>
    </html>
  );
}
