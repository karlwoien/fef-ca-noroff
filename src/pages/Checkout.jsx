import { useCartStore } from '../components/Store';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);

    const total = items.reduce(
        (sum, item) => sum + item.discountedPrice * item.quantity,
        0
    );

    if (items.length === 0) {
        return (
            <div className="text-center mt-8">
                <p>Your cart is empty.</p>
                <Link
                    to="/"
                    className="text-megablue hover:underline mt-4 inline-block"
                >
                    Go back to shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            <ul className="space-y-4">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center border p-4 rounded-lg shadow"
                    >
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p>Price: NOK {item.discountedPrice.toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:underline"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-6 text-right">
                <p className="text-xl font-bold">Total: NOK {total.toFixed(2)}</p>
                <Link
                    to="/checkout-success"
                    className="inline-block mt-4 bg-megablue text-white py-2 px-4 rounded hover:bg-megablue-dark transition"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
}
