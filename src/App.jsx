import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button, Stack } from '@mui/material';

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: false },
  { id: 3, name: 'Headphones', price: 499, inStock: true },
];

export default function App() {
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [products, setProducts] = useState(sampleProducts);

  const filteredProducts = showInStockOnly
    ? products.filter(p => p.inStock)
    : products;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product Dashboard</h1>
      <Stack direction="row" spacing={2} marginBottom={2}>
        <Button
          variant="contained"
          color={showInStockOnly ? 'primary' : 'secondary'}
          onClick={() => setShowInStockOnly(prev => !prev)}
        >
          {showInStockOnly ? 'Show All Products' : 'Show In-Stock Only'}
        </Button>
      </Stack>

      <ProductList products={filteredProducts} setProducts={setProducts} />
    </div>
  );
}
