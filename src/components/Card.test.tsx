// src/components/Card.test.tsx
import { render, screen } from '@testing-library/react';
import Card from './Card'; // Импорт вашего компонента

const product = {
  id: 1,
  liked: false,
  name: 'Test Product',
  price: 99.99,
  description: 'Test product description',
  image: 'test-image.jpg',
};

it('should render product description', () => {
  render(<Card product={product} toggleLike={() => {}} deleteProduct={() => {}} />);

  // Проверяем, что название продукта отображается в заголовке
  const productTitle = screen.getByRole('heading', { name: /Test Product/i });
  expect(productTitle).toBeInTheDocument();

  // Проверяем описание продукта
  const productDescription = screen.getByText(/Test product description/i);
  expect(productDescription).toBeInTheDocument();
});
