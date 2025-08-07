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
  
  const productNames = screen.getAllByText(/Phone/i);
  
  const phoneTitle = productNames[0];
  
  const cardDiv = phoneTitle.closest('div.MuiCard-root');

  expect(cardDiv.className).toMatch(/outOfStock/);
});


test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />);
  let removeButtons = screen.queryAllByText(/Remove/i);
  expect(removeButtons.length).toBeGreaterThan(0);

  fireEvent.click(removeButtons[0]);

  const updatedRemoveButtons = screen.queryAllByText(/Remove/i);
  expect(updatedRemoveButtons.length).toBe(removeButtons.length - 1);
});
