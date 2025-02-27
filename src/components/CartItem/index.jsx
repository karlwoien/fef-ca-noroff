export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <li className="flex flex-col items-center justify-between gap-y-4 rounded-lg border p-4 sm:flex-row">
      {/* Thumbnail og Produktdetaljer */}
      <div className="flex items-center space-x-4">
        <img
          src={item.image.url}
          alt={item.title}
          className="h-16 w-16 rounded object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p>Price: NOK {item.discountedPrice.toFixed(2)}</p>
          <p className="text-sm text-gray-500">
            Product Total: NOK{" "}
            {(item.discountedPrice * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      {/* Quantity Controls */}
      <div>
        <div className="flex items-center space-x-2 rounded border">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="bg-transparent px-3 py-1 transition hover:bg-gray-300"
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="bg-transparent px-3 py-1 transition hover:bg-gray-300"
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
}
