import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productsApi";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const handleGetAllProducts = async () => {
    try {
      const data = await getAllProducts();
      const productsArray = data.products;
      setProducts(productsArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);
  
  return (
    <div>
      {products && products.length > 0 ? (
        products.map((product) => {
          return <p>{JSON.stringify(product)}</p>;
        })
      ) : (
        <p>no products</p>
      )}
    </div>
  );
};

export default ProductsPage;
