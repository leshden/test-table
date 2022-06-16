import './App.css';
import ShowData from './components/show-data/ShowData';
import AddData from './components/add-data/AddData';

function App() {
  return (
    <div className="App">
      <ShowData />
      <h2>Add a Data</h2>
      <AddData />
    </div>
  );
}

export default App;
