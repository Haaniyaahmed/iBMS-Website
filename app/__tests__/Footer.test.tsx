import React from 'react';
import { render, screen} from '@testing-library/react';
import Footer from '../_components/Footer.tsx';

test('renders footer with the correct text', () => {
  render(<Footer/>);
  const text = screen.getByText(/Connect/i);
  expect(text).toBeInTheDocument();
});