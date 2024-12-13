import React, { useEffect } from 'react';
import { useProductStore } from '../store/productStore';
import Card from './Card';

// Типизация для Product
type Product = {
  id: number;
  liked: boolean;
  name: string;
  price: number;
  description: string;  // Добавлено описание
  image: string;        // Добавлено изображение
};

const CardList: React.FC = () => {
  const { products, fetchProducts, filter, toggleLike, deleteProduct } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Фильтрация продуктов
  const filteredProducts = products.filter((product: Product) =>
    filter === 'favorites' ? product.liked : true
  );

  return (
    <div className="card-list">
      {filteredProducts.map((product: Product) => (
        <Card
          key={product.id}
          product={product}
          toggleLike={toggleLike} // Передаем toggleLike как пропс
          deleteProduct={deleteProduct} // Передаем deleteProduct как пропс
        />
      ))}
    </div>
  );
};

export default CardList;
