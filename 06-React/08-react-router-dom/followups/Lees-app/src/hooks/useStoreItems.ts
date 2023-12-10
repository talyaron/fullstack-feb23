import { useState, useContext } from 'react';
import { useStore } from '../context/StoreContext.tsx';

export function useStoreItems() {
  const { storeItems, addToStore } = useStore();
  const [newItem, setNewItem] = useState({
    id: Math.floor(Math.random() * 1000),
    name: '',
    price: 0,
    rating: 0,
    imgUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const addNewItemToStore = () => {
    addToStore(newItem);
    setNewItem({
      id: Math.floor(Math.random() * 1000),
      name: '',
      price: 0,
      rating: 0,
      imgUrl: '',
    });
  };

  return {
    storeItems,
    newItem,
    handleInputChange,
    addNewItemToStore,
  };
}