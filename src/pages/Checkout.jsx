import { useCartStore } from '../components/Store';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import LinkButton from '../components/LinkButton';
import { useTitle } from '../Hooks/UseTitle';

export default function Checkout() {
    useTitle("Checkout");
    
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
            <div className="flex flex-col items-center justify-center text-center mt-8">
                <MdOutlineRemoveShoppingCart className="text-8xl mb-4"/>
                <h3 className='text-3xl font-bold pb-4'>Your cart is empty</h3>
                <p>
                    Looks like you haven't added anything to your cart yet.
                </p>
                <LinkButton 
                    to= {"/"}
                    label="Go Shopping"
                />
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
                    <LinkButton 
                        to="/checkout-success"
                        label="Checkout"
                        className="inline-block w-full mx-0"
                    />
                </div>
            </div>
        </div>
    );
}
