// src/context/StoreProvider.tsx
import React, { ReactNode, createContext, useContext } from 'react';
import { UseBoundStore } from 'zustand';
import { ProductState } from '../store/productStore';

interface StoreProviderProps {
  store: UseBoundStore<ProductState>;
  children: ReactNode;
}

const StoreContext = createContext<UseBoundStore<ProductState> | null>(null);

export const StoreProvider: React.FC<StoreProviderProps> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export const useProductStoreContext = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useProductStoreContext must be used within a StoreProvider');
  }
  return store;
};
