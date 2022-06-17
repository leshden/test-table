import './App.css';
import ShowData from './components/show-data/ShowData';
import AddData from './components/add-data/AddData';
import FilterPanel from './components/filter-panel/FilterPanel';
import Pagination from './components/pagination/Pagination';
import {TableProvider} from './contexts/TableContext';

function App() {
  return (
    <div className="App">
      <TableProvider>
        <ShowData />
        <Pagination />
        <h2>Add a Data</h2>
        <AddData />
        <h2>Filter Panel</h2>
        <FilterPanel />
      </TableProvider>
    </div>
  );
}

export default App;
