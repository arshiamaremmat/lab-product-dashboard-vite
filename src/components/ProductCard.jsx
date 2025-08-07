import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function ProductCard({ product, onRemove }) {
  const { name, price, inStock } = product;

  // Apply conditional styling based on availability
  const cardClass = inStock ? styles.inStock : styles.outOfStock;

  return (
    <Card
      className={cardClass}
      variant="outlined"
      data-testid={`product-card-${name}`} // 👈 added for test targeting
    >
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>{`$${price}`}</Typography>
        <Typography color={inStock ? 'primary' : 'error'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Button
          onClick={onRemove}
          variant="contained"
          color="error"
          aria-label={`Remove ${name}`}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}
