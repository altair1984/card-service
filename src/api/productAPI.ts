// src/api/productAPI.ts
import axios from 'axios';

export interface Product {
    id: number;
    name: string;
    description: string;
    liked: boolean;
    image: string;  // Обязательное свойство
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('/api/products');  // Здесь можно использовать реальный API.
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при загрузке продуктов');
  }
};

// Новая функция для получения продукта по ID
export const fetchProductById = async (id: number): Promise<Product> => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Ошибка при загрузке продукта');
    }
  };
