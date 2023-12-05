export async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Fetching data failed from API", error);
  }
}

export interface IApi {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
