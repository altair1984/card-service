// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './context/StoreProvider';  // Импортируем StoreProvider
import { useProductStore } from './store/productStore';  // Импортируем хранилище Zustand
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import CreateProductPage from './pages/CreateProductPage';

const App: React.FC = () => {
  const useStore = useProductStore(); // Создаем хранилище Zustand

  return (
    <StoreProvider store={useStore}>  {/* Оборачиваем приложение в StoreProvider */}
      <Router>  {/* Используем Router для маршрутов */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />  {/* Новый маршрут */}
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
