import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span className="font-bold">React example app</span>
      <span className="">
        <Link to="/" className="mr-2">
          Products
        </Link>
        <Link to="/about">Products</Link>
      </span>
    </nav>
  );
}
