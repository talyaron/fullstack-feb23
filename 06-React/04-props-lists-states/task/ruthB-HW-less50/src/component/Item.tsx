import React, { FC } from 'react';
import { Product } from '../data/products';

interface ItemProps {
  item: Product;
  handleClick: (itemId: number) => void;
  colorCatArr: { category: string, randomColor: string }[];
}

const Item: FC<ItemProps> = ({ item, handleClick, colorCatArr }) => {
  const getColorByCategory = () => {
    const color = colorCatArr.find(cat => cat.category === item.category)?.randomColor;
    return color;
  };

  return (
    <div className='itemDiv' style={{ backgroundColor: getColorByCategory() }}>
      <img src={item.images[0]} alt={item.title} />
      <div className='titleAndPrice'>
        <h3 className='title'>{item.title}</h3>
        <p className='price'>{item.price}$</p>
      </div>
      <p className='description'>{item.description}</p>
      <div className="rating">
        <p className="rating" style={{ fontSize: "12px" }}>User rating: {item.rating}</p>
      </div>
      <button onClick={() => handleClick(item.id)}>Delete</button>
    </div>
  );
};

export default Item;
