import { FaArrowUp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-10 border-t border-gray-700 px-4 py-10 md:px-8">
      <div className="mx-auto flex flex-col items-start justify-between space-y-8 md:flex-row md:space-y-0">
        {/* Logo og Om Oss */}
        <div>
          <h2 className="text-xl font-semibold text-megablue">MegaBuy</h2>
          <p className="mt-2 text-sm">
            MegaBuy offers the best deals on products you love. Shop smarter,
            live better.
          </p>
          <p className="mt-2 text-sm">© {currentYear} MegaBuy</p>
        </div>
        {/* Navigasjonslenker */}
        <div className="self-start">
          <h3 className="text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/" className="transition hover:text-megablue">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-megablue">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Sosiale Medier */}
        <div className="self-start">
          <h3 className="text-lg">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-megablue"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-megablue"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-megablue"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        {/* Scroll to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center rounded-full bg-megablue p-2 transition-transform hover:scale-105"
            aria-label="Back to top"
          >
            <FaArrowUp size={16} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
