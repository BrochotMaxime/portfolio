import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";

const savedLanguage = localStorage.getItem("language");

const browserLanguage = navigator.language.startsWith("fr") ? "fr" : "en";

const initialLanguage = savedLanguage || browserLanguage;

document.documentElement.lang = initialLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },

  lng: initialLanguage,

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const setLanguage = async (language) => {
  await i18n.changeLanguage(language);

  localStorage.setItem("language", language);

  document.documentElement.lang = language;
};

export { setLanguage };
export default i18n;
