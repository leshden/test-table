import { render, screen } from '@testing-library/react';
import AddData from './AddData';
import {TableProvider} from '../../contexts/TableContext';

test('render button in AddData', () => {
  render(
    <TableProvider>
      <AddData />
    </TableProvider>
  );
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
