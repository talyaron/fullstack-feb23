// AddToStoreForm.tsx
import { useState } from 'react';
import { useStore } from '../context/ShoppingCartContext';

const AddToStoreForm = () => {
  const { addToStore } = useStore();
  const [newItem, setNewItem] = useState({
    id: Math.floor(Math.random() * 1000), // Generate a random ID (for demo purposes)
    name: '',
    price: 0,
    rating: 0,
    imgUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddToStore = () => {
    addToStore(newItem);
    setNewItem({
      id: Math.floor(Math.random() * 1000),
      name: '',
      price: 0,
      rating: 0,
      imgUrl: '',
    });
  };

  return (
    <div>
      <label>Name: </label>
      <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />

      <label>Price: </label>
      <input type="number" name="price" value={newItem.price} onChange={handleInputChange} />

      <label>Rating: </label>
      <input type="number" name="rating" value={newItem.rating} onChange={handleInputChange} />

      <label>Image URL: </label>
      <input type="text" name="imgUrl" value={newItem.imgUrl} onChange={handleInputChange} />

      <button onClick={handleAddToStore}>Add to Store</button>
    </div>
  );
};

export default AddToStoreForm;
