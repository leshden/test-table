import {createContext, useState} from 'react';

export const TableContext = createContext();

export const TableProvider = ({children}) => {
  const [table, setTable] = useState([]);

  const value = {table, setTable};
  return(
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

// export function getData(callback) {
//     fetch('http://localhost:3001')
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         const updateData = data.map(item => {
//           return {...item,
//           date:  moment(item.date).format("DD-MM-YYYY")
//           }
//         })
//         callback(updateData);
//       });
//   }
