import {useEffect} from 'react';
import './App.css';
import ShowData from './components/show-data/ShowData';
import AddData from './components/add-data/AddData';

function getData() {
  fetch('http://localhost:3001')
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
    });
}

function App() {

  useEffect(()=>{
    getData();
  }, []);

  return (
    <div className="App">
      <ShowData />
      <h2>Add a Data</h2>
      <AddData />
    </div>
  );
}

export default App;
