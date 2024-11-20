import SearchBar from "./SearchBar";
import Nav from "./Nav";
import CartIcon from "../CartIcon";
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-megadark shadow-md">
            {/* Logo */}
            <div className="text-xl text-megablue" aria-label="Logo">
                <Link to="/">MegaBuy</Link>
            </div>

            {/* Search bar */}
            <div className="flex-grow mx-6">
                <SearchBar />
            </div>

            {/* Nav + Cart icon */}
            <div className="flex items-center space-x-6 flex-shrink-0">
                <Nav />
                <CartIcon />
            </div>
        </header>
    );
};