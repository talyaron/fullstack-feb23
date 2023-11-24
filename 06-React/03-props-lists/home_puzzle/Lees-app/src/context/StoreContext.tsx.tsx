// StoreContext.tsx
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

  return (
    <StoreContext.Provider value={{ storeItems, addToStore }}>
      {children}
    </StoreContext.Provider>
  );
};
