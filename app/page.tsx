"use client";

// app/page.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { TitleBar } from "@/components/titlebar";
import { Avatar } from "@nextui-org/avatar";
import { Toaster } from "@/components/ui/sonner";
import useUpdater from "@/hooks/tauri/useUpdater";
import { useTauriContext } from "@/components/providers/tauri-provider";
import { CustomContextMenu } from "@/components/custom-context-menu";

export default function Page() {
  const { t } = useTranslation();
  const { appVersion } = useTauriContext();
  useUpdater();
  return (
    <CustomContextMenu>
      <div className="flex h-screen w-screen flex-col">
        <Toaster
          closeButton
          richColors
          position="top-right"
          className=" mt-10"
          toastOptions={{
            style: {
              top: 24,
            },
          }}
        />
        <TitleBar />
        <div className="flex h-full w-full flex-row">
          <div className="flex h-full w-16 flex-col border-r-2">
            <div>
              <p className="select-none align-middle text-xl font-bold text-inherit ">
                SkyLauncher
              </p>
            </div>

            <div className="mt-5 flex flex-col  items-center">
              <Avatar isBordered color="secondary" radius="sm" name="Sky" />
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
    </CustomContextMenu>
  );
}
