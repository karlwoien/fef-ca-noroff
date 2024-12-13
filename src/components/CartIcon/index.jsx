import { FiShoppingCart} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartStore } from "../Store";

export default function CartIcon ({ closeMenu = () => {} }) {
    const items = useCartStore ((state) => state.items);
    const totalItems = items.reduce ((sum, item) => sum + item.quantity, 0)

    return (
        <div className="relative">
            <Link to="/checkout"
                onClick={closeMenu}
                className=" hover:text-megablue transition-colors" 
                aria-label="Go to checkout">
                <FiShoppingCart size={25} />
            </Link>
            {totalItems > 0 && (
                <span
                    className="absolute -top-5 -right-5 bg-megablue text-white text-xs font-bold px-2 py-1 rounded-full"    
                    aria-label={`${totalItems} items in cart`}
                >
                    {totalItems}
                </span>
            )}
        </div>
    );
};