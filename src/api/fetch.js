const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export async function getProducts () {
    try {
        const response = await fetch (BASE_URL);

        if (!response.ok) {
            console.log ("Failed to fetch products")
        }

        const {data} = await response.json();
        return data;
    } catch (error) {
        throw new Error (error.message);
    };
};

export async function getProductByID(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }

        const { data } = await response.json();
        console.log("Fetched product data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching product by ID:", error.message);
        throw new Error(error.message);
    }
};