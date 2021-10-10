import React, { useContext, useEffect } from 'react';
import BookContext from '../context/bookContext';

import Book from './Book';
import Spinner from './Spinner';

const threshold = 5; // TODO : move to context

const Books = () => {
  useEffect(() => {
    getBooks();
  }, []);

  const bookContext = useContext(BookContext);

  const { displayAllBooks, getBooks, toggleDisplayAllBooks, loading } =
    bookContext;

  if (loading) {
    return <Spinner />;
  }

  let books = bookContext.books;

  if (!books) {
    return <h2>Fail to load books. Please Refresh the page.</h2>;
  }

  let total = books.length;

  if (total === 0) {
    return <h2>There is no book on the list.</h2>;
  }

  books = !displayAllBooks && total > threshold ? books.slice(0, 5) : books;

  // extract the 1st isbn10
  books = books.map((book) => {
    const isbns = book.isbns;
    const isbn = isbns.length > 0 ? isbns[0].isbn10 : null;
    return { ...book, isbn };
  });

  return (
    <div>
      {/* Books */}
      {books.map((book, index) => (
        <Book key={book.isbn} book={{ ...book, index }} />
      ))}
      {/* Show more or show less */}
      {/* The complete bestseller list is loaded at the beginning. Only display part of the content by default */}
      {total > threshold && (
        <button className='show-more-or-less' onClick={toggleDisplayAllBooks}>
          {displayAllBooks ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Books;
