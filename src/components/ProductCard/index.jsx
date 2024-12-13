import LinkButton from "../LinkButton";
import { calculateDiscount } from "../../utils/discount";

export default function ProductCard({ product }) {
    const discount = calculateDiscount(product.price, product.discountedPrice);
    const hasDiscount = discount !== null;

    return (
        <div className="card flex flex-col justify-between rounded-lg border h-full">
            {/* Image */}
            <div className="h-[350px] w-full overflow-hidden">
                <img
                    src={product.image.url}
                    alt={product.title}
                    className="h-full w-full object-cover rounded-t-lg"
                />
            </div>

            {/* Content */}
            <div className="m-4 flex-grow flex flex-col">
                <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                    <p className="text-base">NOK {product.price}</p>
                    {hasDiscount && (
                        <span className="text-green-600 border border-green-600 px-2 py-1 rounded text-sm">
                            -{discount}%
                        </span>
                    )}
                </div>
            </div>

            {/* Link */}
            <LinkButton 
                to={`/product/${product.id}`}
                label="View Product"
            />
        </div>
    );
};