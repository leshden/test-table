import './ShowData.css';
import {useEffect, useState, useContext} from 'react';
import {TableContext} from '../../contexts/TableContext';
import {getData} from '../../requests/request_to_db';

const ShowData = () => {
  const {table, setTable} = useContext(TableContext);

  useEffect(()=>{
    getData((arr)=>  setTable(arr));
  }, []);

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
          table.map(item => {
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
