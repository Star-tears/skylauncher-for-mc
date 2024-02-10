// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@/components/skylauncher/providers/theme-provider";
import { useRouter } from "next/navigation";
import "@/translations/i18n";
import { TauriProvider } from "@/components/skylauncher/providers/tauri-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <TauriProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextUIProvider navigate={router.push}>
          <main>{children}</main>
        </NextUIProvider>
      </ThemeProvider>
    </TauriProvider>
  );
}
