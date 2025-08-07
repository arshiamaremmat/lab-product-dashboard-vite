import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders product dashboard title', () => {
  render(<App />);
  expect(screen.getByText(/Product Dashboard/i)).toBeInTheDocument();
});

test('displays all products initially', () => {
  render(<App />);
  
  const productNames = ['Laptop', 'Phone', 'Headphones'];
  
  productNames.forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

test('applies conditional styling for out-of-stock products', () => {
  render(<App />);
  
  const phoneCard = screen.getByTestId('product-card-Phone');

  expect(phoneCard.className).toMatch(/outOfStock/);
});

test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />);
  
  const initialRemoveButtons = screen.getAllByText(/Remove/i);
  expect(initialRemoveButtons.length).toBeGreaterThan(0);

  fireEvent.click(initialRemoveButtons[0]);

  const updatedRemoveButtons = screen.queryAllByText(/Remove/i);
  expect(updatedRemoveButtons.length).toBe(initialRemoveButtons.length - 1);
});
