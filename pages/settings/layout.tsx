import ScrollArea from "@/components/skylauncher/base/scroll-area";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children?: ReactNode }) {
  return (
    <section className=" absolute inset-0">
      <ScrollArea>
        <div className=" pt-10">{children}</div>
      </ScrollArea>
    </section>
  );
}
