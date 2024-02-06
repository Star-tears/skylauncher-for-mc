"use client";

// app/page.tsx
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getVersion } from "@tauri-apps/api/app";
import { Trans, useTranslation } from "react-i18next";
import { TitleBar } from "@/components/titlebar";
import { useEffectOnce } from "react-use";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";

export default function Page() {
  const { t } = useTranslation();
  const [appVersion, setTauriVersion] = useState("");
  useEffectOnce(() => {
    const fetchVersion = async () => {
      try {
        const version = await getVersion();
        setTauriVersion(version);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVersion();
  });
  return (
    <div className="flex h-screen w-screen flex-col">
      <TitleBar />
      <div className="grid h-full w-full grid-cols-2">
        <div className=" flex w-16 flex-col items-center border-r-2">
          <span className="select-none align-middle text-xl font-bold text-inherit ">
            SkyLauncher
          </span>
          <div className=" mt-5">
            <Avatar isBordered radius="sm" name="Sky" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="fixed bottom-0 right-0 flex items-end justify-end p-1">
        <span className="text-xs text-gray-500 opacity-50">
          skylauncher-for-mc {t("version")} v{appVersion}
        </span>
      </div>
    </div>
  );
}
