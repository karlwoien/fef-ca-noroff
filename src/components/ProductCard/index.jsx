import LinkButton from "../LinkButton";
import { calculateDiscount } from "../../utils/discount";

export default function ProductCard({ product }) {
  const discount = calculateDiscount(product.price, product.discountedPrice);
  const hasDiscount = discount !== null;

  return (
    <div className="card flex h-full flex-col justify-between rounded-lg border">
      {/* Image */}
      <div className="h-[350px] w-full overflow-hidden">
        <img
          src={product.image.url}
          alt={product.title}
          className="h-full w-full rounded-t-lg object-cover"
        />
      </div>
      {/* Content */}
      <div className="m-4 flex flex-grow flex-col">
        <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-base">NOK {product.price}</p>
          {hasDiscount && (
            <span className="rounded border border-green-600 px-2 py-1 text-sm text-green-600">
              -{discount}%
            </span>
          )}
        </div>
      </div>
      {/* Link */}
      <LinkButton to={`/product/${product.id}`} label="View Product" />
    </div>
  );
}
