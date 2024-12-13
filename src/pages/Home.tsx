// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useProductStore } from '../store/productStore';
import CardList from '../components/CardList';
import Filter from '../components/Filter';

const Home: React.FC = () => {
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h1>Список продуктов</h1>
      <Filter />
      <CardList />
    </div>
  );
};

export default Home;
