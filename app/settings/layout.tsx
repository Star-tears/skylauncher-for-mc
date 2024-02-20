import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children?: ReactNode }) {
  return (
    <section className=" absolute inset-0">
      <div className=" pt-10">{children}</div>
    </section>
  );
}
