// src/store/productStore.ts
import create from 'zustand';

// Определяем интерфейсы для продукта и состояния
export interface Product {
  id: number;
  liked: boolean;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  filter: string;
  fetchProducts: () => void;
  toggleLike: (id: number) => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: Product) => void;
  setFilter: (filter: string) => void;
}

// Используем `create` для создания хранилища
export const useProductStore = create<ProductState>((set) => ({
  products: [
    { id: 1, liked: false, name: "Test Product", price: 10, description: "Description", image: "test.jpg" },
  ],
  loading: false,
  error: null,
  filter: '',

  // Логика для загрузки продуктов
  fetchProducts: () => {
    set({ loading: true });
    // Логика для загрузки продуктов
  },

  // Логика для изменения состояния лайка
  toggleLike: (id: number) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      ),
    }));
  },

  // Логика для удаления продукта
  deleteProduct: (id: number) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },

  // Логика для добавления нового продукта
  addProduct: (product: Product) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },

  // Логика для установки фильтра
  setFilter: (filter: string) => {
    set({ filter });
  },
}));
