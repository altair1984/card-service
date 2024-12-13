// src/pages/ProductDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, Product } from '../api/productAPI';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        try {
          const data = await fetchProductById(Number(id));
          setProduct(data);
        } catch (error) {
          setError('Ошибка при загрузке продукта');
        } finally {
          setLoading(false);
        }
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Продукт не найден</div>;

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
