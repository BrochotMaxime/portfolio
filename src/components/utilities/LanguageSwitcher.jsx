import { useTranslation } from "react-i18next";
import { setLanguage } from "../../i18n";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage?.startsWith("fr") ? "fr" : "en";

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={
        currentLanguage === "fr"
          ? "Sélection de la langue"
          : "Language selection"
      }
    >
      <button
        className={`language-switcher__button ${
          currentLanguage === "en" ? "language-switcher__button--active" : ""
        }`}
        type="button"
        lang="en"
        aria-pressed={currentLanguage === "en"}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>

      <span className="language-switcher__separator" aria-hidden="true">
        /
      </span>

      <button
        className={`language-switcher__button ${
          currentLanguage === "fr" ? "language-switcher__button--active" : ""
        }`}
        type="button"
        lang="fr"
        aria-pressed={currentLanguage === "fr"}
        onClick={() => setLanguage("fr")}
      >
        FR
      </button>
    </div>
  );
}

export default LanguageSwitcher;
