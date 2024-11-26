import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
                <p className="mt-2">NOK {product.price}</p>
            </div>

            {/* Link */}
            <Link
                to={`/product/${product.id}`}
                className="btn m-4 bg-megablue text-white text-center py-3 rounded hover:bg-white hover:text-megablue border border-megablue transition duration-300"
            >
                View product
            </Link>
        </div>
    );
};