import { Link } from "react-router-dom";

export default function Nav({ isMobile = false, closeMenu = () => {} }) {
  return (
    <nav>
      <ul
        className={`${
          isMobile
            ? "flex flex-col items-center space-y-4 py-4"
            : "flex items-center space-x-4"
        } text-lg text-white`}
      >
        <li className="transition-colors hover:text-megablue">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="transition-colors hover:text-megablue">
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
