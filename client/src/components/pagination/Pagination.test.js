import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';
import {TableProvider, TableContext} from '../../contexts/TableContext';

test('render Pagination', () => {
  render(
    <TableProvider>
      <Pagination />
    </TableProvider>
  );
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('click on button Pagination', () => {
  let numberPage = 3;
  const setNumberPage = (page) => {
    numberPage = page;
  }

  let curPage = 1;
  const setCurPage = (page) => {
    curPage = page;
  }

  const value = {numberPage, setNumberPage, curPage, setCurPage};
  render(
    <TableContext.Provider value={value}>
      <Pagination />
    </TableContext.Provider>
  );
  const buttonElements = screen.getAllByRole('button');
  expect(buttonElements[0]).toBeInTheDocument();

  userEvent.click(buttonElements[1]);
  userEvent.click(buttonElements[2]);
  userEvent.click(buttonElements[0]);

});
