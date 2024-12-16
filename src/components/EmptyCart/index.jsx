import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import LinkButton from "../LinkButton";

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-8">
            <MdOutlineRemoveShoppingCart className="text-8xl mb-4" />
            <h3 className="text-3xl font-bold pb-4">Your cart is empty</h3>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <LinkButton to="/" label="Go Shopping" />
        </div>
    );
};