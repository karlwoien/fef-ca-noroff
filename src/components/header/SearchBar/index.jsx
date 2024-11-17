export default function SearchBar () {
    return (
        <div className="max-w-xl">
            <input 
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
        </div>
    );
};