import RootView from "@/components/skylauncher/views/root-view";
// app/layout.tsx
import { Providers } from "@/components/skylauncher/base/providers/providers";

import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <Providers>
      <RootView>{children}</RootView>
    </Providers>
  );
}
