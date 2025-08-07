import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, setProducts }) {
  const handleRemove = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  if (products.length === 0) return <p>No products available.</p>;

  return (
    <>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={() => handleRemove(product.id)}
        />
      ))}
    </>
  );
}
