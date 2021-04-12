import { render, screen } from '@testing-library/react';
import Header from './components/header';

test('nav link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});


