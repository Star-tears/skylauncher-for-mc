"use client";

import React, { ReactNode } from "react";
import useUpdater from "@/hooks/tauri/useUpdater";
import { TitleBar } from "@/components/skylauncher/base/titlebar";
import { Avatar } from "@nextui-org/avatar";
import { Toaster } from "@/components/ui/sonner";
import { useTauriContext } from "@/components/skylauncher/base/providers/tauri-provider";
import { CustomContextMenu } from "@/components/skylauncher/base/custom-context-menu";
import { CommandMenu } from "@/components/skylauncher/base/command-menu";
import { GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { BgImgUnit } from "@/components/skylauncher/unit/bg-img-unit";
import { LinkWithLocale, useTranslation } from "next-export-i18n";

export default function RootView({ children }: { children?: React.ReactNode }) {
  const { t } = useTranslation();
  const { appVersion } = useTauriContext();
  useUpdater();
  return (
    <>
      <TitleBar />
      <CommandMenu />
      <Toaster
        closeButton
        richColors
        position="top-right"
        toastOptions={{
          style: {
            top: 24,
          },
        }}
      />
      <CustomContextMenu>
        <div className=" relative h-screen w-screen">
          <BgImgUnit>
            <div className="flex size-full flex-row">
              <div className=" flex h-full w-16 flex-col border-r-2 backdrop-blur-2xl backdrop-filter">
                <div>
                  <p className="select-none align-middle text-xl font-bold text-inherit ">
                    SkyLauncher
                  </p>
                </div>

                <div className="mt-5 flex flex-1 flex-col  items-center justify-between">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar
                      isBordered
                      color="secondary"
                      radius="sm"
                      name="Sky"
                    />
                    <LinkWithLocale href="/">
                      <HomeIcon className=" size-5" />
                    </LinkWithLocale>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <LinkWithLocale href="/settings">
                      <GearIcon className=" size-5" />
                    </LinkWithLocale>
                  </div>
                </div>
              </div>
              <div aria-label="main-page" className="relative h-full grow">
                {children}
              </div>
            </div>
          </BgImgUnit>
        </div>
      </CustomContextMenu>
      <div className="fixed bottom-0 right-0 z-[1000] flex items-end justify-end p-1">
        <span className="text-xs text-gray-500 opacity-50">
          skylauncher-for-mc {t("version")} v{appVersion}
        </span>
      </div>
    </>
  );
}
