import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productsApi";
import ProductItem from "../../components/productItem/ProductItem";

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
    <div className="products-container">
      {products && products.length > 0 ? (
        products.map((product) => {
          return <ProductItem product={product} />;
        })
      ) : (
        <p>no products</p>
      )}
    </div>
  );
};

export default ProductsPage;
