import React, { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import { ErrorMsg } from './Error';

const productData: IProduct = {
  id: 1,
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 41,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (produt: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter valid title');
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

    onCreate(response.data);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="enter product title"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      {error && <ErrorMsg error={error} />}

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">
        Create
      </button>
    </form>
  );
}
