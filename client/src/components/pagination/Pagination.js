import './Pagination.css';
import {useContext} from 'react';
import {TableContext} from '../../contexts/TableContext';

export const COUNTPAGES = 2;

const Pagination = () => {
  const {numberPage, setCurPage} = useContext(TableContext);

  const pages = [];
  for (let i = 1; i <= numberPage; ++i) {
    pages.push(i);
  }

  const pageOnClick = (page) => {
    setCurPage(page);
    console.log(page);
  }

  return(
    <nav className='pagination-container'>
      <ul className='ul-conatainer'>
        { pages.map(page => { return (
            <li key={page} className='page-item'>
              <a href='!#' className='page-link' role="button" onClick={()=>{pageOnClick(page)}}>
                {page}
              </a>
            </li>)
          })
        }
      </ul>
    </nav>
  );
}

export default Pagination;
