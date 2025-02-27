import { useCartStore } from "../components/Store";
import LinkButton from "../components/LinkButton";
import { useTitle } from "../Hooks/UseTitle";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";

export default function Checkout() {
  useTitle("Checkout");

  const { items, removeItem, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {/* Grid layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Items in Cart Section */}
        <div className="lg:col-span-2">
          <ul className="space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            ))}
          </ul>
        </div>
        {/* Checkout Summary Section */}
        <div className="space-y-4 rounded-lg border p-4">
          <h2 className="text-xl font-bold">Checkout Summary</h2>
          <p className="text-lg">Total: NOK {total.toFixed(2)}</p>
          <p className="text-lg">Shipping: Free</p>
          <LinkButton
            to="/checkout-success"
            label="Checkout"
            className="mx-0 inline-block w-full"
          />
        </div>
      </div>
    </div>
  );
}
