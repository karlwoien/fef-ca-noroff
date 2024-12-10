import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/fetch';
import { useCartStore } from '../components/Store';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const addToCart = useCartStore((state) => state.addItem);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProductByID(id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
        }, [id]);

        if (loading) {
            return <p>Loading product details...</p>;
        }

        if (!product) {
            return <p>Product not found..</p>;
        }

        // Kalkuler rabatt hvis det er en
        const hasDiscount = product.price > product.discountedPrice;
        const discount = hasDiscount
            ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
            : null;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Produktinformasjon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Produktbilde */}
                <div>
                    <img
                        src={product.image.url} 
                        alt={product.image.alt || product.title}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Produktdetaljer */}
                <div>
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="mt-4">{product.description}</p>

                    {/* Pris og rabatt */}
                    <div className="mt-6">
                        <p className="text-xl font-semibold">
                            NOK {product.discountedPrice.toFixed(2)}
                        </p>
                        {hasDiscount && (
                            <p className="text-sm text-green-600 mt-1">
                                Save {discount}% (Original price: NOK {product.price.toFixed(2)})
                            </p>
                        )}
                    </div>

                    {/* Legg til i handlekurv */}
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-6 bg-megablue text-white text-center py-3 px-4 rounded hover:bg-white hover:text-megablue  border border-megablue transition duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Anmeldelser */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold">Reviews</h2>
                {product.reviews && product.reviews.length > 0 ? (
                    <ul className="mt-4 space-y-4">
                        {product.reviews.map((review) => (
                            <li key={review.id} className="p-4 border rounded-lg shadow-sm">
                                <p>{review.description}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    - {review.username || 'Anonymous'}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-4 text-gray-500">
                        There are no reviews for this product yet.
                    </p>
                )}
            </div>
        </div>
    );
};