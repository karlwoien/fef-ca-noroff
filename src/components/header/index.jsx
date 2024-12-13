import Nav from "./Nav";
import CartIcon from "../CartIcon";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import React, { useState } from "react";
import useScreenSize from "../../Hooks/UseScreenSize";

export default function Header () {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    const isSmallScreen = useScreenSize(768);

    if (!isSmallScreen && menuOpen) {
        setMenuOpen(false);
    }

    return (
        <header className="flex items-center justify-between md:px-8 px-4 py-6 bg-megadark">
            {/* Logo */}
            <div className="text-3xl text-megablue font-semibold" aria-label="Logo">
                <Link to="/">MegaBuy</Link>
            </div>

            {/* Desktop Nav + Cart icon */}
            <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
                <Nav />
                <CartIcon />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="flex items-center space-x-6 md:hidden">
                <CartIcon closeMenu={closeMenu} />
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    className="text-white focus:outline-none"
                >
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                className={`h-screen absolute top-16 left-0 w-full bg-megadark shadow-lg z-50 transition-transform transform ${
                    menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                } duration-300 ease-in-out flex flex-col items-center`}
            >
                <Nav isMobile={true} closeMenu={closeMenu}/>
            </div>
            )}
        </header>
    );
};