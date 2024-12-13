// Импортируем тип Product
import { Product } from '../store/productStore';

type CardProps = {
  product: Product;
  toggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
};

const Card: React.FC<CardProps> = ({ product, toggleLike, deleteProduct }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => toggleLike(product.id)}>Toggle Like</button>
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </div>
  );
};

export default Card;
