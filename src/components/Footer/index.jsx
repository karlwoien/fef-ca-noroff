import { FaArrowUp } from 'react-icons/fa';

export default function Footer () {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex items-center justify-between px-6 py-4 shadow-md pb-8">
      {/* Logo */}
      <div className="text-xl text-megablue">
        <a href="/">MegaBuy</a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-white">
        © {currentYear} MegaBuy
      </div>

      {/* Back to the Top */}
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center p-2 bg-megablue rounded-full transition-colors transform animate-bounce"
        aria-label="Back to top"
      >
        <FaArrowUp size={16} className="text-white" />
      </button>
    </footer>
  );
};