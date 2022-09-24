import React from 'react';
import { findByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  const {findByText} = render(<App />);
  const linkElement = await findByText(/Last search/i);
  expect(linkElement).toBeInTheDocument();
});
