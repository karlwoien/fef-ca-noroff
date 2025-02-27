import { useProducts } from "../Hooks/UseProducts";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { useTitle } from "../Hooks/UseTitle";
import Loader from "../components/Loader";

export default function Home() {
  useTitle("Home");
  const { products, loading } = useProducts();

  return (
    <div>
      {/*Hero section*/}
      <section className="flex items-center justify-center px-6 py-20 text-center md:px-12 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold uppercase text-megablue md:text-6xl">
            Discover the Best Deals on Products You Love
          </h1>
          <p className="mt-8 text-xl">
            Shop smarter with MegaBuy. From tech gadgets to fashion finds, we’ve
            got something for everyone. Unbeatable prices, exclusive offers, and
            fast delivery — only a click away!
          </p>
        </div>
      </section>
      {/*SearchBar*/}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        {!loading && <SearchBar products={products} />}
      </section>
      {/*Product section*/}
      <section className="mx-auto max-w-6xl py-8">
        <div className="grid auto-rows-fr grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3">
          {loading ? (
            <Loader />
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
