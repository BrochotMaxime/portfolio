import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAbout from "./locales/en/about.json";
import enButtons from "./locales/en/buttons.json";
import enContact from "./locales/en/contact.json";
import enFooter from "./locales/en/footer.json";
import enHome from "./locales/en/home.json";
import enNavigation from "./locales/en/navigation.json";
import enProjects from "./locales/en/projects.json";
import enResume from "./locales/en/resume.json";

import frAbout from "./locales/fr/about.json";
import frButtons from "./locales/fr/buttons.json";
import frContact from "./locales/fr/contact.json";
import frFooter from "./locales/fr/footer.json";
import frHome from "./locales/fr/home.json";
import frNavigation from "./locales/fr/navigation.json";
import frProjects from "./locales/fr/projects.json";
import frResume from "./locales/fr/resume.json";

const supportedLanguages = ["en", "fr"];
const savedLanguage = localStorage.getItem("language");

const browserLanguage = navigator.language.toLowerCase().startsWith("fr")
  ? "fr"
  : "en";

const initialLanguage = supportedLanguages.includes(savedLanguage)
  ? savedLanguage
  : browserLanguage;

document.documentElement.lang = initialLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navigation: enNavigation,
        home: enHome,
        buttons: enButtons,
        about: enAbout,
        contact: enContact,
        resume: enResume,
        projects: enProjects,
        footer: enFooter,
      },
    },

    fr: {
      translation: {
        navigation: frNavigation,
        home: frHome,
        buttons: frButtons,
        about: frAbout,
        contact: frContact,
        resume: frResume,
        projects: frProjects,
        footer: frFooter,
      },
    },
  },

  lng: initialLanguage,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

async function setLanguage(language) {
  if (!supportedLanguages.includes(language)) {
    return;
  }

  await i18n.changeLanguage(language);

  localStorage.setItem("language", language);
  document.documentElement.lang = language;
}

export { setLanguage };
export default i18n;
