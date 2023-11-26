import React, { createContext, useContext, useState } from 'react';

type StoreItem = {
  id: number;
  name: string;
  price: number;
  rating: number;
  imgUrl: string;
};

type StoreContextType = {
  storeItems: StoreItem[];
  addToStore: (item: StoreItem) => void;
  deleteFromStore: (id: number) => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider: React.FC = ({ children }) => {
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  const addToStore = (item: StoreItem) => {
    setStoreItems((prevItems) => [...prevItems, item]);
  };
  const deleteFromStore = (id: number) => {
    setStoreItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <StoreContext.Provider value={{ storeItems, addToStore, deleteFromStore }}>
      {children}
    </StoreContext.Provider>
  );
};
