import PageTransition from "@/components/skylauncher/base/transitions/page-transition";
import React, { ReactElement, ReactNode } from "react";

export default function Home() {
  return (
    <PageTransition>
      <div className=" size-full pt-10">
        <div>Home</div>
      </div>
    </PageTransition>
  );
}