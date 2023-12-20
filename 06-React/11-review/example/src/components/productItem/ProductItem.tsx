import { FC } from "react";
import useRatings from "../../hooks/useRatings";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  product: Product;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { state } = useRatings(product.rating);
  const navigate = useNavigate()
  return (
    <div className="product-card">
      <img
        className="product-card_image"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="tag-conatiner">
        <p className="tag">{product.category}</p>
        <p className="tag">{product.brand}</p>
      </div>
      <div className="ratings-container">
        {state?.map((src) => {
          if (src == "star") {
            return (
              <span className="material-symbols-outlined full-icon">{src}</span>
            );
          } else {
            return <span className="material-symbols-outlined">{src}</span>;
          }
        })}
        {product.rating}
      </div>
      <h3 className="title">{product.title}</h3>
      <p className="price">Only for: {product.price}$ !</p>
      <button onClick={() => { navigate(`/product/${product.id}`) }}>SEE MORE</button>
    </div>
  );
};

export default ProductItem;
