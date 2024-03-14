import React, { Fragment, useEffect, useState } from "react";
import {
  SettingsBody,
  SettingsHeader,
  SettingsItem,
} from "@/components/skylauncher/base/settings";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageSwitcher } from "next-export-i18n";
import { useRouter } from "next/router";
import {
  useLanguageQuery,
  useTranslation,
} from "next-export-i18n";

function LangSettings() {
  const languages = ["en", "zh-CN"];
  const router = useRouter();
  const [language, setLanguage] = useState("");
  const [lang, setLang] = useState("");
  const [query] = useLanguageQuery();
  const { t } = useTranslation();
  // Effect hook to update the 'language' state if it's empty and there's a language query parameter.
  useEffect(() => {
    // only update language if the 'language' state is still empty and if there's a 'lang' query parameter.
    if (language === "" && query?.lang) {
      // Update the 'language' state with the value of the 'lang' query parameter (to set the browsers preferred language as the current selected).
      setLanguage(query?.lang);
      setLang(query?.lang);
    }
    // The effect will run whenever the 'language' state or the 'lang' query parameter changes.
  }, [language, query?.lang]);
  const handleChange = (v: string) => {
    // Extract the new language value from the event object.
    const newLanguage = v;

    // Update the 'language' state with the new value.
    setLanguage(newLanguage);

    // Use the router to navigate to the current path but with an updated 'lang' query parameter.
    router.push(
      {
        pathname: router.pathname,
        query: { lang: newLanguage }, // Update the 'lang' query parameter with the new language.
      },
      undefined,
      { shallow: true }, // use shallow routing, to not send an unnecessary request to the server.
    );
  };
  return (
    <SettingsItem>
      <SettingsHeader>{t("Language Settings")}</SettingsHeader>
      <SettingsBody>
        <Select
          defaultValue={lang}
          onValueChange={(v) => {
            console.log(v);
            handleChange(v);
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
                  <LanguageSwitcher lang={supportedLang}>
                    {supportedLang}
                  </LanguageSwitcher>
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
