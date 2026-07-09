import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigationLinks = [
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link className="header__logo" to="/">
          Maxime Brochot
        </Link>

        <nav className="header__nav">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.label}
              className={getLinkClassName}
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="header__menu-button"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
      </div>

      <nav
        className={`header__mobile-nav ${
          isMenuOpen ? "header__mobile-nav--open" : ""
        }`}
      >
        {navigationLinks.map((link) => (
          <NavLink
            key={link.label}
            className={getLinkClassName}
            to={link.path}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
