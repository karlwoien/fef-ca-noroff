import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import LinkButton from "../LinkButton";

export default function EmptyCart() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center text-center">
      <MdOutlineRemoveShoppingCart className="mb-4 text-8xl" />
      <h3 className="pb-4 text-3xl font-bold">Your cart is empty</h3>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <LinkButton to="/" label="Go Shopping" />
    </div>
  );
}
