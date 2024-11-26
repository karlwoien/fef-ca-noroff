import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
            <ul className="flex items-center space-x-4 text-white text-lg">
                <li className="hover:text-megablue transition-colors">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-megablue transition-colors">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};