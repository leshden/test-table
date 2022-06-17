import {createContext, useState} from 'react';

export const TableContext = createContext();

export const TableProvider = ({children}) => {
  const [table, setTable] = useState([]);
  const [numberPage, setNumberPage] = useState(1);
  const [curPage, setCurPage] = useState(1);

  const value = {table, setTable, numberPage, setNumberPage, curPage, setCurPage};
  return(
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}
