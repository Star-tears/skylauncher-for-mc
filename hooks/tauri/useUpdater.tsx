import React from "react";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { toast } from "sonner";
import { useEffectOnce } from "react-use";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { relaunch } from "@tauri-apps/api/process";

const useUpdater = () => {
  const { t } = useTranslation();
  function startInstall(newVersion: string | undefined) {
    toast.info(t("Installing update v{{ v }}", { v: newVersion }), {
      description: t("Will relaunch afterwards"),
      duration: 100000,
    });
    installUpdate().then(relaunch);
  }
  useEffectOnce(() => {
    checkUpdate().then(({ manifest, shouldUpdate }) => {
      if (shouldUpdate) {
        const updateVersionTip = (
          <div className=" w-full">
            <div className=" flex flex-row gap-1 font-bold text-inherit">
              <InfoCircledIcon className=" size-4 stroke-current" />
              {t("Update v{{ v }} available", { v: manifest?.version })}
            </div>
            <div className=" text-inherit">{manifest?.body}</div>
            <div className="flex w-full flex-row">
              <Button
                className=" h-7 flex-1 bg-sky-800 text-white hover:bg-sky-600"
                onClick={() => {
                  startInstall(manifest?.version);
                }}
              >
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
};

export default useUpdater;
