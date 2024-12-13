// src/pages/CreateProductPage.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateProductPage from './CreateProductPage'; // Замените на ваш компонент
import { create } from 'zustand';
import { useProductStore } from '../store/productStore'; // Импорт хранилища

// Создаем мок хранилища для теста
const mockStore = create(useProductStore);

it('should add a product correctly', async () => {
  render(<CreateProductPage />);

  // Заполняем форму для добавления нового продукта
  fireEvent.change(screen.getByLabelText(/product name/i), { target: { value: 'New Product' } });
  fireEvent.change(screen.getByLabelText(/product description/i), { target: { value: 'New product description' } });
  fireEvent.change(screen.getByLabelText(/price/i), { target: { value: 49.99 } });

  // Симулируем клик по кнопке добавления продукта
  fireEvent.click(screen.getByText(/add product/i));

  // Ждем обновления состояния
  await waitFor(() => {
    // Проверяем, что продукт добавлен в список
    expect(mockStore.getState().products.length).toBe(2); // Поскольку один продукт уже был в начальном состоянии
    expect(mockStore.getState().products[1].name).toBe('New Product');
    expect(mockStore.getState().products[1].description).toBe('New product description');
  });
});
