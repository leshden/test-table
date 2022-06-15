import './AddData.css';

const AddData = () => {

  const addDataOnClick = (e) => {
    e.preventDefault();
    console.log('Submit');
  }

  return(
    <form onSubmit={addDataOnClick}>
      <input type='date' name='dateName' required='required'/>
      <input type='text' name='fullName' required='required' placeholder='Enter a name...' />
      <input type='number' name='quantityName' required='required' placeholder='Enter a quantity...' />
      <input type='number' name='distanceName' required='required' placeholder='Enter a distance...' />
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddData;
