import './ShowData.css';
import {useEffect, useState} from 'react';
import moment from 'moment';

const ShowData = () => {
  const [formData, setFormData] = useState([]);

  function getData() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const updateData = data.map(item => {
          return {...item,
          date:  moment(item.date).format("DD-MM-YYYY")
          }
        })
        setFormData(updateData);
      });
  }

  useEffect(()=>{
    getData();
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
          formData.map(item => {
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
