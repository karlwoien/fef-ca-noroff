import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../api/fetch";
import { useCartStore } from "../components/Store";
import { calculateDiscount } from "../utils/discount";
import { useTitle } from "../Hooks/UseTitle";
import Loader from "../components/Loader";
import LinkButton from "../components/LinkButton";

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
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useTitle(product ? product.title : "Loading...");

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-megablue">
          Product Not Found
        </h1>
        <p className="mb-6 text-lg">
          We are sorry, but the product you are looking for does not seem to
          exist or is unavailable.
        </p>
        <LinkButton to="/" label="Continue Shopping" />
      </div>
    );
  }

  const discount = calculateDiscount(product.price, product.discountedPrice);
  const hasDiscount = discount !== null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Produktinformasjon */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Produktbilde */}
        <div>
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
        {/* Produktdetaljer */}
        <div>
          <h1 className="text-3xl font-bold text-megablue">{product.title}</h1>
          <p className="mt-4">{product.description}</p>
          <p className="mt-2">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nobis vero ducimus quia eveniet distinctio dolores ullam culpa iusto
            ipsum necessitatibus libero molestias doloremque temporibus
            assumenda ut, dolorem corrupti soluta.
          </p>
          {/* Reviews lenke */}
          <div className="mt-4 text-sm">
            <button
              onClick={() => {
                const reviewsSection =
                  document.getElementById("review-section");
                reviewsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:underline"
            >
              Reviews ({product.reviews?.length || 0})
            </button>
          </div>
          {/* Pris og rabatt */}
          <div className="mt-4 flex items-center">
            <p className="text-xl font-semibold">
              NOK {product.discountedPrice.toFixed(2)}
            </p>
            {hasDiscount && (
              <p className="pl-4 text-sm text-green-600">
                Save {discount}% (Original price: NOK {product.price.toFixed(2)}
                )
              </p>
            )}
          </div>
          {/* Legg til i handlekurv */}
          <button
            onClick={() => addToCart(product)}
            className="mt-4 rounded border border-megablue bg-megablue px-4 py-3 text-center text-white transition duration-300 hover:bg-white hover:text-megablue"
          >
            Add to Cart
          </button>
          {/* Tags */}
          <div className="mt-4 text-sm">
            <p>Tags:</p>
            {product.tags && product.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span key={index} className="rounded border px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Anmeldelser */}
      <div id="review-section" className="mt-12">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {product.reviews.map((review) => (
              <li key={review.id} className="rounded-lg border p-4 shadow-sm">
                <div className="flex items-center space-x-2">
                  <p className="font-semibold">
                    {review.username || "Anonymous"}
                  </p>
                  <p className="text-megablue">Rating: {review.rating}/5</p>
                </div>
                <p className="mt-2">"{review.description}"</p>
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
}
