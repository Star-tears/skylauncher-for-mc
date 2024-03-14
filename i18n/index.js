var en = require("./en.json");
var zhCN = require("./zh-CN.json");

const i18n = {
    translations: {
        en: en,
        "zh-CN": zhCN,
    },
    defaultLang: "en",
    languageDataStore: "query",
    useBrowserDefault: true,
};

module.exports = i18n;