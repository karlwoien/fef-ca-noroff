import Nav from "./Nav";
import CartIcon from "../CartIcon";
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className="flex items-center justify-between px-6 py-6 bg-megadark">
            {/* Logo */}
            <div className="text-3xl text-megablue font-semibold" aria-label="Logo">
                <Link to="/">MegaBuy</Link>
            </div>

            {/* Nav + Cart icon */}
            <div className="flex items-center space-x-6 flex-shrink-0">
                <Nav />
                <CartIcon />
            </div>
        </header>
    );
};