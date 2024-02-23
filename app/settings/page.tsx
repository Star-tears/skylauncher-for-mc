"use client";

import React from "react";
import { BgImgSettings } from "@/components/skylauncher/unit/settings";
import LangSettings from "@/components/skylauncher/unit/settings/lang-settings";

export default function SettingsPage() {
  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <BgImgSettings />
      <LangSettings />
    </div>
  );
}
