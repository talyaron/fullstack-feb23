import { useState } from 'react';
import './App.scss';
import ItemGallery from './component/itemGallery';
import products from './data/products';

function App() {
  const [itemsArr, setItemsArr] = useState(products);

  const handleDelete = (itemId: number) => {
    const newArr = itemsArr.filter(item => item.id !== itemId);
    setItemsArr(newArr);
  };

  return (
    <>
      <ItemGallery items= {itemsArr} handleDelete={handleDelete}></ItemGallery>
    </>
  );
}

export default App;
