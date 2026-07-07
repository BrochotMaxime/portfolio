import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          Maxime Brochot
        </Link>

        <nav className="header__nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>

        <div className="header__mobile">
          <button
            className="header__mobile-button"
            type="button"
            aria-label="Toggle navigation menu"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
