import {useEffect} from 'react';
import './App.css';

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
      Hello World
    </div>
  );
}

export default App;
