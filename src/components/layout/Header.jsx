import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../utilities/LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    {
      label: t("navigation.projects"),
      path: "/projects",
    },
    {
      label: t("navigation.about"),
      path: "/about",
    },
    {
      label: t("navigation.resume"),
      path: "/resume",
    },
    {
      label: t("navigation.contact"),
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getLinkClassName = ({ isActive }) =>
    isActive ? "header__link header__link--active" : "header__link";

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/" onClick={closeMenu}>
          Maxime Brochot
        </Link>

        <div className="header__desktop">
          <nav className="header__nav" aria-label={t("navigation.mainLabel")}>
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                className={getLinkClassName}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>

        <button
          className="header__menu-button"
          type="button"
          onClick={toggleMenu}
          aria-label={t("toggleMenu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          ☰
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`header__mobile-nav ${
          isMenuOpen ? "header__mobile-nav--open" : ""
        }`}
        aria-label={t("mobileLabel")}
      >
        {navigationLinks.map((link) => (
          <NavLink
            key={link.path}
            className={getLinkClassName}
            to={link.path}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}

        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
