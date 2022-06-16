import './AddData.css';
import {useState, useContext} from 'react';
import {TableContext} from '../../contexts/TableContext';
import {getData} from '../../requests/request_to_db';

const AddData = () => {
  const {setTable} = useContext(TableContext);
  const [formData, setFormData] = useState({
    dateName: '',
    fullName: '',
    quantityName: 0,
    distanceName: 0,
  });

  function createData() {
    let date = formData.dateName;
    let name = formData.fullName;
    let quantity = formData.quantityName;
    let distance = formData.distanceName;

    fetch('http://localhost:3001/test_req', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({date: date, name: name, quantity: quantity, distance: distance}),
      }).then(response => {
        getData((arr)=>  setTable(arr));
      });
  }

  const addDataSubmit = (e) => {
    e.preventDefault();
    createData();
  }

  const fieldOnChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...formData};
    newFormData[fieldName] = (fieldName.includes('quantity') || fieldName.includes('distance')) ? parseInt(fieldValue) : fieldValue;
    setFormData(newFormData);
  }

  return(
    <form onSubmit={addDataSubmit}>
      <input type='date'
             name='dateName'
             required='required'
             onChange={fieldOnChange} />
      <input type='text'
             name='fullName'
             required='required'
             placeholder='Enter a name...'
             onChange={fieldOnChange} />
      <input type='number'
             name='quantityName'
             required='required'
             placeholder='Enter a quantity...'
             onChange={fieldOnChange} />
      <input type='number'
             name='distanceName'
             required='required'
             placeholder='Enter a distance...'
             onChange={fieldOnChange} />
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddData;
