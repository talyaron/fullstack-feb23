import React, { useState } from 'react';
import GroceryItem from './GroceryItem';

const GroceryList: React.FC = () => {
  const [items, setItems] = useState<{ id: number; name: string; amount:number }[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemObject = {
        id: Date.now(),
        name: newItem.trim(),
        amount: 1,
      };
      setItems([...items, newItemObject]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (id: number) => {
    const deletedItems = items.filter((item) => item.id !== id);
    setItems(deletedItems);
  };

  const handleUpdateAmount = (id:number , changeCount:number)=> {
    const updatedItems = items.map((item) => {
        if (item.id === id) {
            if(item.amount == 0 && changeCount == -1)
                return { ...item, amount: item.amount}
            
          return { ...item, amount: item.amount + changeCount };
        }
        return item;
      });
    
      setItems(updatedItems);
  }

  return (
    <div className='wrapper'>
      <h1>Grocery List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
        <div className='listDiv'>

      {items.map((item) => (
          <GroceryItem
          key={item.id}
          item={item}
          onDelete={handleDeleteItem}
          onUpdate={handleUpdateAmount}
          />
          ))}
          </div>
    </div>
  );
};

export default GroceryList;
