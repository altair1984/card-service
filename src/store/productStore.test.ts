import { create } from 'zustand';

export type Product = {
  id: number;
  liked: boolean;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
  filter: string;
  fetchProducts: () => void;
  toggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: Product) => void;
  setFilter: (filter: string) => void;
};

// Типизация для set
export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,
  filter: '',
  fetchProducts: () => {
    // Заглушка для fetchProducts
  },
  toggleLike: (id: number) => {
    set((state: ProductState) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      ),
    }));
  },
  deleteProduct: (id: number) => {
    set((state: ProductState) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
  addProduct: (product: Product) => {
    set((state: ProductState) => ({
      products: [...state.products, product],
    }));
  },
  setFilter: (filter: string) => {
    set((state: ProductState) => ({
      filter: filter, // Исправлено, теперь состояние обновляется корректно
    }));
  },
}));
