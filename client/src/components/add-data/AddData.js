import './AddData.css';
import {useState} from 'react';

const AddData = () => {

  const [formData, setFormData] = useState({
    dateName: '',
    fullName: '',
    quantityName: 0,
    distanceName: 0,
  });

  const addDataOnClick = (e) => {
    e.preventDefault();
    console.log('Submit');
  }

  const fieldOnChange = (e) => {
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    setFormData({...formData, fieldName: fieldValue})

    console.log(`value: ${formData}`);
  }

  return(
    <form onSubmit={addDataOnClick}>
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
