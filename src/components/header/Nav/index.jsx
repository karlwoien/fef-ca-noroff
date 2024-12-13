import { Link } from "react-router-dom";

export default function Nav({ isMobile = false, closeMenu = () => {} }) {
    return (
        <nav>
            <ul
                className={`${
                    isMobile
                        ? "flex flex-col items-center space-y-4 py-4"
                        : "flex items-center space-x-4"
                } text-white text-lg`}
            >
                <li className="hover:text-megablue transition-colors">
                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-megablue transition-colors">
                    <Link to="/contact" onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
