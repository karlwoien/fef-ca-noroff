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

export async function getProductsByID (id) {

};