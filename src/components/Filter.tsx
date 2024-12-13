// src/components/Filter.tsx

import { useProductStore } from '../store/productStore';

const Filter = () => {
  const setFilter = useProductStore((state) => state.setFilter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Filter products"
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
