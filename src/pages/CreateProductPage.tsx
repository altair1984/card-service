// src/pages/CreateProductPage.tsx
import React from 'react';
import { ProductState } from '../store/productStore'; // Исправлен путь
import { StoreProvider } from '../context/StoreProvider'; // Исправлен путь

export const CreateProductPage = () => {
  return (
    <div>
      <button>Add Product</button>
    </div>
  );
};
