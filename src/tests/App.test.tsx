import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/core/App';

test('app rendering test', () => {
  render(<App />);
  const linkElement = screen.getByText(/hotel occupancy/i);
  expect(linkElement).toBeInTheDocument();
});
