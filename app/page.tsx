"use client";

// app/page.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { TitleBar } from "@/components/skylauncher/titlebar";
import { Avatar } from "@nextui-org/avatar";
import { Toaster } from "@/components/ui/sonner";
import useUpdater from "@/hooks/tauri/useUpdater";
import { useTauriContext } from "@/components/skylauncher/providers/tauri-provider";
import { CustomContextMenu } from "@/components/skylauncher/custom-context-menu";
import { CommandMenu } from "@/components/skylauncher/command-menu";
import { GearIcon } from "@radix-ui/react-icons";
import { Link } from "@nextui-org/link";

export default function Page() {
  const { t } = useTranslation();
  const { appVersion } = useTauriContext();
  useUpdater();
  return (
    <>
      <TitleBar />
      <CommandMenu />
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

          <div className="flex h-full w-full flex-row">
            <div className="flex h-full w-16 flex-col border-r-2">
              <div>
                <p className="select-none align-middle text-xl font-bold text-inherit ">
                  SkyLauncher
                </p>
              </div>

              <div className="mt-5 flex flex-1 flex-col  items-center justify-between">
                <div>
                  <Avatar isBordered color="secondary" radius="sm" name="Sky" />
                </div>
                <div className="mb-4 flex flex-col">
                  <Link
                    isExternal
                    showAnchorIcon
                    href="/"
                    anchorIcon={<GearIcon className=" size-5" />}
                  ></Link>
                </div>
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
    </>
  );
}
