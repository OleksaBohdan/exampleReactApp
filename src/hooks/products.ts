import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

export function useProducts() {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function addProduct(product: IProduct) {
    setProduct((prev) => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setProduct(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, addProduct };
}
