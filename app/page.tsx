"use client";

// app/page.tsx
import React, { ReactNode } from "react";
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
import BackgroundImg from "@/components/skylauncher/background-img";

export default function Page({ children }: { children: ReactNode }) {
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
        className=" mt-10"
        toastOptions={{
          style: {
            top: 24,
          },
        }}
      />
      <CustomContextMenu>
        <div className=" h-screen w-screen">
          <BackgroundImg>
            <div className="flex size-full flex-row">
              <div className=" flex h-full w-16 flex-col border-r-2 backdrop-blur-2xl backdrop-filter">
                <div>
                  <p className="select-none align-middle text-xl font-bold text-inherit ">
                    SkyLauncher
                  </p>
                </div>

                <div className="mt-5 flex flex-1 flex-col  items-center justify-between">
                  <div>
                    <Avatar
                      isBordered
                      color="secondary"
                      radius="sm"
                      name="Sky"
                    />
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
              <div>{children}</div>
            </div>
          </BackgroundImg>
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
