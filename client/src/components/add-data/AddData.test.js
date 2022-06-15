import { render, screen } from '@testing-library/react';
import AddData from './AddData';

test('render button in AddData', () => {
  render(<AddData />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
