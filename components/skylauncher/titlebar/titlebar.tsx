import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { WebviewWindow } from "@tauri-apps/api/window";
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscChromeRestore,
} from "react-icons/vsc";
import Image from "next/image";
import SkyLauncherLogoSvg from "@/public/images/skylauncher-for-mc-logo.svg";
import { ThemeModeToggle } from "@/components/skylauncher/theme-mode-toggle";
import { useEffectOnce } from "react-use";

export default function TitleBar() {
  const { t } = useTranslation();
  const [maximized, setMaximized] = useState(false);
  const [appWindow, setAppWindow] = useState<WebviewWindow>();

  const setupAppWindow = async () => {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    setAppWindow(appWindow);
  };
  useEffectOnce(() => {
    setupAppWindow();
  });

  const windowMinimize = () => {
    appWindow?.minimize();
  };
  const windowClose = () => {
    appWindow?.close();
  };
  const windowToggle = () => {
    appWindow?.toggleMaximize().finally(() => {
      appWindow?.isMaximized().then(setMaximized);
    });
  };

  useEffectOnce(() => {
    appWindow?.isMaximized().then(setMaximized);
  });

  return (
    <div
      data-tauri-drag-region
      className="fixed left-0 right-0 top-0 z-[1000] flex h-10 w-screen flex-row justify-between border-b-1 bg-default bg-opacity-20 backdrop-blur-3xl backdrop-filter"
    >
      <div className=" my-auto flex flex-row space-x-1 pl-1">
        <Image
          data-tauri-drag-region
          priority
          src={SkyLauncherLogoSvg}
          alt="Follow us on www.sky-crafting.com"
          className=" h-7 w-7"
        />
        <span
          data-tauri-drag-region
          className="select-none align-middle text-xl font-bold text-inherit hover:text-blue-800"
        >
          SKYL
        </span>
      </div>
      <div className="flex h-full flex-row">
        <div className="scale-75">
          <ThemeModeToggle />
        </div>
        <div
          title={t("Minimize")}
          className="inline-flex h-full w-11 items-center justify-center bg-black bg-opacity-0 transition-all hover:bg-opacity-10 hover:transition-all active:bg-opacity-20 dark:bg-white dark:bg-opacity-0 dark:hover:bg-opacity-15 dark:active:bg-opacity-25"
          onClick={windowMinimize}
        >
          <VscChromeMinimize className="align-middle" />
        </div>
        {maximized ? (
          <div
            title={t("Restore Down")}
            className="inline-flex h-full w-11 items-center justify-center bg-black bg-opacity-0 transition-all hover:bg-opacity-10 hover:transition-all active:bg-opacity-20 dark:bg-white dark:bg-opacity-0 dark:hover:bg-opacity-15 dark:active:bg-opacity-25"
            onClick={windowToggle}
          >
            <VscChromeRestore className="align-middle" />
          </div>
        ) : (
          <div
            title={t("Maximize")}
            className="inline-flex h-full w-11 items-center justify-center bg-black bg-opacity-0 transition-all hover:bg-opacity-10 hover:transition-all active:bg-opacity-20 dark:bg-white dark:bg-opacity-0 dark:hover:bg-opacity-15 dark:active:bg-opacity-25"
            onClick={windowToggle}
          >
            <VscChromeMaximize className="align-middle" />
          </div>
        )}
        <div
          title={t("Close")}
          className="group inline-flex h-full w-11 items-center justify-center  transition-all hover:bg-red-600 hover:transition-all active:bg-red-700"
          onClick={windowClose}
        >
          <VscChromeClose className="align-middle group-hover:fill-white" />
        </div>
      </div>
    </div>
  );
}
