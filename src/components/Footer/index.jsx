import { FaArrowUp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer () {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 mt-10 md:px-8 px-4 border-t border-gray-700">
            <div className="mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                {/* Logo og Om Oss */}
                <div>
                    <h2 className="text-xl font-semibold text-megablue">MegaBuy</h2>
                    <p className="mt-2 text-sm">
                        MegaBuy offers the best deals on products you love. Shop smarter, live better.
                    </p>
                    <p className="text-sm mt-2">© {currentYear} MegaBuy</p>
                </div>
                {/* Navigasjonslenker */}
                <div className="self-start">
                    <h3 className="text-lg">Quick Links</h3>
                    <ul className="mt-2 space-y-1">
                        <li>
                            <Link to="/" className="hover:text-megablue transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-megablue transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Sosiale Medier */}
                <div className='self-start'>
                    <h3 className="text-lg">Follow Us</h3>
                    <div className="mt-2 flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-megablue transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-megablue transition">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-megablue transition">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
                {/* Scroll to Top */}
                <div>
                    <button
                      onClick={scrollToTop}
                      className="flex items-center justify-center p-2 bg-megablue rounded-full transition-transform hover:scale-105"
                      aria-label="Back to top"
                    >
                      <FaArrowUp size={16} className="text-white" />
                    </button>
                </div>
            </div>
        </footer>
  );
};