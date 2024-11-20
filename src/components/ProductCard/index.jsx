import { Link } from "react-router-dom";

export default function ProductCard ({product}) {
    return (
        <div className="card rounded-lg">
            <img
                src= {product.image.url}
                alt= {product.title}
                className="h-58 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="mt-2">{product.price}</p>
            <Link to={`/product/${product.id}`} className="btn">
                View Product
            </Link>
        </div>
    );
};