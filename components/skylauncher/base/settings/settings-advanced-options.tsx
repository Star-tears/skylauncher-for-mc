import React, { ReactNode } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTranslation } from "react-i18next";

function SettingsAdvancedOptions({ children }: { children?: ReactNode }) {
  const { t } = useTranslation();
  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={t("Advanced options")}
      >
        <div className="flex flex-col gap-4 pl-2 pr-4">{children}</div>
      </AccordionItem>
    </Accordion>
  );
}

export default SettingsAdvancedOptions;
