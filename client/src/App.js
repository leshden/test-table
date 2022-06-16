import './App.css';
import ShowData from './components/show-data/ShowData';
import AddData from './components/add-data/AddData';
import FilterPanel from './components/filter-panel/FilterPanel';

function App() {
  return (
    <div className="App">
      <ShowData />
      <h2>Add a Data</h2>
      <AddData />
      <h2>Filter Panel</h2>
      <FilterPanel />
    </div>
  );
}

export default App;
