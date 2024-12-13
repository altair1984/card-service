// src/components/ProductDetail.tsx
import React from 'react';
import { Product } from '../api/productAPI';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt="Product" />
      <h2>{product.description}</h2>
      <p>Полное описание продукта...</p>
      <Button variant="contained" component={Link} to="/">Назад</Button>
    </div>
  );
};

export default ProductDetail;
