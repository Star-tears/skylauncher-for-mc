import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json'
import zhCn from './zh-cn.json'

export const defaultLng = 'zh-cn';
// this is exported in order to avoid hard coding supported languages in more than 1 place
const resources = {
    en: {
        translations: en
    },
    "zh-cn": {
        translations: zhCn
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources,
        fallbackLng: defaultLng,
        debug: false,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
