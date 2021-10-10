import React from 'react';

const Book = ({ book }) => {
  const {
    index,
    book_image,
    title,
    author,
    description,
    isbn,
    amazon_product_url,
  } = book;

  return (
    <div className='card'>
      <h2 className='index'>{index + 1}.</h2>
      <img className='book-image' src={book_image} alt='' />
      <div className='card-text'>
        <h2 className='title'>
          <a href={amazon_product_url}>{title}</a>
        </h2>
        {author && (
          <p>
            {'by '}
            {author}
          </p>
        )}
        <p className='description'>{description}</p>
        {isbn && (
          <p className='isbn'>
            {'ISBN: '}
            {isbn}
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;
