import './FilterPanel.css';
import {useState, useContext} from 'react';
import {TableContext} from '../../contexts/TableContext';
import {getData} from '../../requests/request_to_db';
import moment from 'moment';

const FilterPanel = () => {
  const {setTable} = useContext(TableContext);
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
      return response.json();
    }).then(data => {
      const updateData = data.map(item => {
        return {...item,
        date:  moment(item.date).format("DD-MM-YYYY")
        }
      })
      setTable(updateData);
    });
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

  const resetOnClick = (e) => {
    e.preventDefault();
    getData((arr)=>  setTable(arr));
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
      <button className='filter-button' type='submit'>Apply</button>
      <button className='filter-button' onClick={resetOnClick}>Reset</button>
    </form>
  );
}

export default FilterPanel;
