import { Link } from "react-router-dom";

function Button({ children, to, href, variant = "primary", type="button" }) {
  const className = `button button--${variant}`;

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}

export default Button;