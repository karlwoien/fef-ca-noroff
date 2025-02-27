import Nav from "./Nav";
import CartIcon from "../CartIcon";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import useScreenSize from "../../Hooks/UseScreenSize";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const isSmallScreen = useScreenSize(768);

  if (!isSmallScreen && menuOpen) {
    setMenuOpen(false);
  }

  return (
    <header className="flex items-center justify-between bg-megadark px-4 py-6 md:px-8">
      {/* Logo */}
      <div className="text-3xl font-semibold text-megablue" aria-label="Logo">
        <Link to="/">MegaBuy</Link>
      </div>
      {/* Desktop Nav + Cart icon */}
      <div className="hidden flex-shrink-0 items-center space-x-6 md:flex">
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
          className={`absolute left-0 top-16 z-50 h-screen w-full transform bg-megadark shadow-lg transition-transform ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } flex flex-col items-center duration-300 ease-in-out`}
        >
          <Nav isMobile={true} closeMenu={closeMenu} />
        </div>
      )}
    </header>
  );
}
