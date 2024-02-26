import React, { ReactElement } from "react";
import { BgImgSettings } from "@/components/skylauncher/unit/settings";
import LangSettings from "@/components/skylauncher/unit/settings/lang-settings";
import PageTransition from "@/components/skylauncher/base/transitions/page-transition";
import SettingsLayout from "./layout";

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

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <SettingsLayout>{page}</SettingsLayout>;
};
