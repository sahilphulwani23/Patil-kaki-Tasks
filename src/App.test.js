import { render, screen } from '@testing-library/react';
import TableUI from './App';
import App from './App';

test('renders learn react link', () => {
  render(<TableUI />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
