"use client";

// app/page.tsx
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getVersion } from "@tauri-apps/api/app";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { Trans, useTranslation } from "react-i18next";
import { TitleBar } from "@/components/titlebar";
import { useEffectOnce } from "react-use";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function Page() {
  const { t } = useTranslation();
  const [appVersion, setTauriVersion] = useState("");
  useEffectOnce(() => {
    const fetchVersion = async () => {
      try {
        const version = await getVersion();
        setTauriVersion(version);
      } catch (error) {}
    };
    fetchVersion();
  });
  useEffectOnce(() => {
    checkUpdate().then(({ manifest, shouldUpdate }) => {
      if (shouldUpdate) {
        const updateVersionTip = (
          <div className=" w-full">
            <div className=" flex flex-row gap-1 font-bold text-inherit">
              <InfoCircledIcon className=" size-4 stroke-current" />
              {"Update v" + manifest?.version + " available"}
            </div>
            <div className=" text-inherit">{manifest?.body}</div>
            <div className="flex w-full flex-row">
              <Button className=" h-7 flex-1 bg-sky-800 text-white hover:bg-sky-600">
                {t("Install update and relaunch")}
              </Button>
            </div>
          </div>
        );
        toast.info(updateVersionTip, {
          duration: 20000,
        });
      }
    });
  });
  return (
    <div className="flex h-screen w-screen flex-col">
      <TitleBar />
      <div className="flex h-full w-full flex-row">
        <div className="flex h-full w-16 flex-col items-center border-r-2">
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
