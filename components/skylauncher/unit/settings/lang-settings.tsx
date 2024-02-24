import React, { Fragment } from "react";
import {
  SettingsBody,
  SettingsHeader,
  SettingsItem,
} from "../../base/settings";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LangSettings() {
  const { t, i18n } = useTranslation();
  const languages = Object.keys(i18n.options.resources!);
  const lang = i18n.resolvedLanguage;
  return (
    <SettingsItem>
      <SettingsHeader>{t("Language Settings")}</SettingsHeader>
      <SettingsBody>
        <Select
          defaultValue={lang}
          onValueChange={(v) => {
            console.log(v);
            i18n.changeLanguage(v);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t("Languages")}</SelectLabel>
              {languages.map((supportedLang, index) => (
                <SelectItem key={index} value={supportedLang}>
                  {supportedLang}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </SettingsBody>
    </SettingsItem>
  );
}

export default LangSettings;
