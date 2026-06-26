import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          Maxime Brochot
        </Link>

        <nav className="header__nav">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="header__mobile">
          <button 
            className="header__mobile-button"
            type="button"
            aria-label="Toggle navigation menu"
          >
            
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;