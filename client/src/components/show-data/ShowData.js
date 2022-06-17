import './ShowData.css';
import {useEffect, useState, useContext} from 'react';
import {TableContext} from '../../contexts/TableContext';
import {getData} from '../../requests/request_to_db';
import {COUNTPAGES} from '../pagination/Pagination';

const ShowData = () => {
  const {table, setTable, setNumberPage, numberPage, curPage} = useContext(TableContext);

  useEffect(()=>{
    getData((arr)=>  {
      const pages = Math.ceil(arr.length/COUNTPAGES);
      setNumberPage(pages === 0 ? 1 : pages);
      setTable(arr);
      });
  }, []);

  const filterTable = table.filter((item, index) => {
    const max = curPage * COUNTPAGES;
    const min = max - COUNTPAGES;
    return index >= min && index < max}
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        {
          filterTable.map(item => {
            return(
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.distance}</td>
              </tr>
            );
          } )
        }
      </tbody>
    </table>
  );
}

export default ShowData;
