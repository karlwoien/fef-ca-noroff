const BASE_URL = "https://v2.api.noroff.dev/online-shop";

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${url}: ${response.status} ${response.statusText}`
      );
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
}

export async function getProducts() {
  return fetchData(BASE_URL);
}

export async function getProductByID(id) {
  return fetchData(`${BASE_URL}/${id}`);
}
