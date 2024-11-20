import { FiShoppingCart} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CartIcon () {
    return (
        <div className="relative">
            <Link to="/checkout"
                className=" hover:text-megablue transition-colors" 
                aria-label="Go to checkout">
                <FiShoppingCart size={25} />
            </Link>
        </div>
    );
};