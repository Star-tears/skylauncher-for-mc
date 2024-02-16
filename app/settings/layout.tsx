import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children?: ReactNode }) {
  return (
    <section className=" size-full">
      <div className=" size-full pt-10">{children}</div>
    </section>
  );
}
