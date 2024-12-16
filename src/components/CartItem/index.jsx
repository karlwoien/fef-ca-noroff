export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
    return (
        <li className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded-lg gap-y-4">
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
    );
};