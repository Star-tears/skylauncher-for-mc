"use client";

import PageTransition from "@/components/skylauncher/base/transitions/page-transition";
// app/page.tsx
import React, { ReactNode } from "react";

export default function Home() {
  return (
    <PageTransition>
      <div className=" size-full pt-10">
        <div>Home</div>
      </div>
    </PageTransition>
  );
}
