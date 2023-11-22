// Product.tsx
import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  category: string;
  rating: number;
  img: string;
  onRemove: (id: number) => void;
  onAdd: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, name, category, rating, img, onRemove, onAdd }) => {
  return (
    <div className={`card ${category.toLowerCase()}`}>
      <p>{name}</p>
      <img src={img} alt={name} />
      <p>Category: {category}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
      <button onClick={() => onAdd(id)}>Add</button>
    </div>
  );
};

export default Product;
