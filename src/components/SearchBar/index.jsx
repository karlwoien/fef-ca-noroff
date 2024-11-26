import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

export default function SearchBar({ products }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Håndter input endring
    const handleInputChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);

        // Filtrer produkter basert på søkeinput
        if (input.trim() === '') {
            setFilteredProducts([]);
        } else {
            const matches = products.filter((product) =>
                product.title.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredProducts(matches);
        }
    };

    // Clear søkefeltet
    const clearSearch = () => {
        setSearchInput('');
        setFilteredProducts([]);
    };

    return (
        <div className="relative ">
            {/* Søkefelt */}
            <div className="flex items-center border rounded-lg">
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                    placeholder="Search products"
                    className="w-full px-4 py-2 focus:outline-none focus:ring focus:ring-megablue bg-transparent"
                />
                {searchInput && (
                    <button
                        onClick={clearSearch}
                        className="px-3 py-2 text-red-600 hover:text-red-800 transition"
                        aria-label="Clear search"
                    >
                        <AiOutlineClose size={20} />
                    </button>
                )}
            </div>

            {/* Autofullfør resultater */}
            {filteredProducts.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-2">
                {filteredProducts.map((product) => (
                    <li
                        key={product.id}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-200"
                    >
                        {/* Produktlink */}
                        <Link
                            to={`/product/${product.id}`}
                            className="flex items-center space-x-4 w-full text-gray-800"
                        >
                            {/* Lite bilde */}
                            <img
                                src={product.image.url}
                                alt={product.title}
                                className="h-10 w-10 rounded object-cover"
                            />
                            {/* Produkt tittel */}
                            <span className="flex-grow">{product.title}</span>
                        </Link>

                        {/* Pris */}
                        <span className="text-gray-600">${product.price}</span>
                    </li>
                    ))}
                </ul>
            )}

            {/* Ingen treff melding */}
            {filteredProducts.length === 0 && searchInput.trim() !== '' && (
                <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-2 px-4 py-2 text-gray-500">
                    No products found.
                </div>
            )}
        </div>
    );
};