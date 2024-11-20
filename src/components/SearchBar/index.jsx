export default function SearchBar () {
    return (
        <div className="max-w-6xl mx-4">
            <input 
                type="text"
                placeholder="Search products"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-megablue bg-transparent"
            />
        </div>
    );
};