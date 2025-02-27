import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartStore } from "../Store";

export default function CartIcon({ closeMenu = () => {} }) {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
      <Link
        to="/checkout"
        onClick={closeMenu}
        className="transition-colors hover:text-megablue"
        aria-label="Go to checkout"
      >
        <FiShoppingCart size={25} />
      </Link>
      {totalItems > 0 && (
        <span
          className="absolute -right-5 -top-5 rounded-full bg-megablue px-2 py-1 text-xs font-bold text-white"
          aria-label={`${totalItems} items in cart`}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
}
