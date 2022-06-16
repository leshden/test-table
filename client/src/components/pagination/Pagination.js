import './Pagination.css';

const Pagination = () => {
  const pages = [];
  for (let i = 1; i < 6; ++i) {
    pages.push(i);
  }

  return(
    <nav className='pagination-container'>
      <ul>
        {
          pages.map(page => {
            <li key={page} className='page-item'>
              <a href='!#' className='page-link'>
                {page}
              </a>
            </li>
          })
        }
      </ul>
    </nav>
  );
}

export default Pagination;
