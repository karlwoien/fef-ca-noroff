import { useProducts } from "../Hooks/UseProducts";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { useTitle } from "../Hooks/UseTitle";

export default function Home() {
    useTitle("Home")
    const {products, loading} = useProducts();

    return (
        <div>
            {/*Hero section*/}
            <section className="py-20 md:py-32 flex items-center justify-center text-center px-6 md:px-12">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl text-megablue uppercase font-semibold">
                        Discover the Best Deals on Products You Love
                    </h1>
                    <p className="text-xl mt-8">
                        Shop smarter with MegaBuy. From tech gadgets to fashion finds, we’ve got something for everyone. Unbeatable prices, exclusive offers, and fast delivery — only a click away!
                    </p>
                </div>
            </section>

            {/*SearchBar*/}
            <section className="pt-8 px-4 max-w-6xl mx-auto">
                {!loading && <SearchBar products={products} />}
            </section>

            {/*Product section*/}
            <section className="py-8 max-w-6xl mx-auto">
                <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 auto-rows-fr">
                    {loading ? (
                        <p>Loading products...</p>
                    ) : (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};
