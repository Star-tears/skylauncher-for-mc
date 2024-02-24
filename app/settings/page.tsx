"use client";

import React from "react";
import { BgImgSettings } from "@/components/skylauncher/unit/settings";
import LangSettings from "@/components/skylauncher/unit/settings/lang-settings";
import PageTransition from "@/components/skylauncher/base/transitions/page-transition";

export default function SettingsPage() {
  return (
    <PageTransition>
      <div className="mt-4 flex flex-col items-center gap-4">
        <BgImgSettings />
        <LangSettings />
      </div>
    </PageTransition>
  );
}
