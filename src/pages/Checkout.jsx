import { useCartStore } from '../components/Store';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

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

            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Items in Cart Section */}
                <div className="lg:col-span-2">
                    <ul className="space-y-4">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center border p-4 rounded-lg"
                            >
                                {/* Thumbnail og Produktdetaljer */}
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image.url}
                                        alt={item.title}
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.title}</h2>
                                        <p>Price: NOK {item.discountedPrice.toFixed(2)}</p>
                                        <p className="text-sm text-gray-500">
                                            Product Total: NOK {(item.discountedPrice * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                {/* Quantity Controls */}
                                <div>
                                    <div className="flex items-center space-x-2 border rounded">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="px-3 py-1 bg-transparent hover:bg-gray-300 transition"
                                        >
                                            -
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="px-3 py-1 bg-transparent hover:bg-gray-300 transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                {/* Remove Button */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Checkout Summary Section */}
                <div className="border p-4 rounded-lg space-y-4">
                    <h2 className="text-xl font-bold">Checkout Summary</h2>
                    <p className="text-lg">Total: NOK {total.toFixed(2)}</p>
                    <p className="text-lg">Shipping: Free</p>
                    <Link
                        to="/checkout-success"
                        className="inline-block bg-megablue text-white py-2 px-4 rounded hover:bg-megablue-dark transition w-full text-center"
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
}
