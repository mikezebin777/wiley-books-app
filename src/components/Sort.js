import React, { useContext } from 'react';
import BookContext from '../context/bookContext';

const Sort = () => {
  const bookContext = useContext(BookContext);

  const { sortBooks } = bookContext;

  const sort = (e) => {
    sortBooks(e.target.value);
  };

  return (
    <div className='sort'>
      <span className='title'>Sort by:</span>
      <select onChange={sort} name='order-by' id='order-by'>
        <option value='rank'>Rank</option>
        <option value='title'>Title</option>
        <option value='author'>Author</option>
        <option value='isbn'>ISBN</option>
      </select>
    </div>
  );
};

export default Sort;
