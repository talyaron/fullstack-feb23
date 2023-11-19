import React from 'react'


interface GroceryItemProps {
    item: {
      id: number;
      name: string;
      amount?: number
    };
    onDelete: (id: number) => void;
    onUpdate: (id: number, changeCount:number) => void;
  }
  
  const GroceryItem: React.FC<GroceryItemProps> = ({ item, onDelete, onUpdate }) => {
    return (
      <div className='itemDiv'>
        <span>{item.name}:</span>
        <span>{item.amount}</span>
        <div className='btns'>
            <button onClick={()=>onUpdate(item.id, 1)}>+</button>
            <button onClick={()=>onUpdate(item.id , -1)}>-</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      </div>
    );
  };

export default GroceryItem