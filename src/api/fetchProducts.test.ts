import { fetchProducts } from './productAPI';

jest.mock('./productAPI', () => ({
  fetchProducts: jest.fn(),
}));

describe('fetchProducts', () => {
  it('should fetch products successfully', async () => {
    const mockData = [{ id: 1, name: 'Test Product' }];
    (fetchProducts as jest.Mock).mockResolvedValue(mockData);

    const result = await fetchProducts();
    expect(result).toEqual(mockData);
  });

  it('should handle error in fetching products', async () => {
    const errorMessage = 'Network Error';
    (fetchProducts as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toHaveProperty('message', errorMessage);
    }
  });
});
