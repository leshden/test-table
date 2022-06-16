import './FilterPanel.css';
import {useState} from 'react';

const FilterPanel = () => {
  const [filterData, setFilterData] = useState({
    column: 'name',
    condition: '=',
    value: '',
  });

  function getFilterData() {
    let column = filterData.column;
    let condition = filterData.condition;
    let value = filterData.value;

    fetch('http://localhost:3001/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({column: column, condition: condition, value: value}),
    }).then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      }).catch(error => {console.log(error)});
  }

  const submitFilter = (e) => {
    e.preventDefault();
    getFilterData();
    console.log(`column: ${filterData.column} condition: ${filterData.condition} value: ${filterData.value}`);
  }

  const onChangeColumn = (e) => {
    setFilterData({...filterData, column: e.target.value })
  }

  const onChangeCondition = (e) => {
    setFilterData({...filterData, condition: e.target.value })
  }

  const onChangeValue = (e) => {
    let value = e.target.value;
    if (filterData.column !== 'name') {
      const num = parseInt(e.target.value);
      value = isNaN(num) ? 0 : num;
    }
    const num = parseInt(e.target.value);
    setFilterData({...filterData, value: value })
  }

  return (
    <form onSubmit={submitFilter}>
      <select onChange = {onChangeColumn}>
        <option value="name">Name</option>
        <option value="quantity">Quantity</option>
        <option value="distance">Distance</option>
      </select>
      <select onChange={onChangeCondition}>
        <option value="==">Equals</option>
        <option value="includes">Includes</option>
        <option value=">">More</option>
        <option value="<">Less</option>
      </select>
      <input className='input-filter' type='text' required  onChange={onChangeValue}/>
      <button type='submit'>Apply</button>
    </form>
  );
}

export default FilterPanel;
