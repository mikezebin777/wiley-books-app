import { useReducer } from 'react';
import axios from 'axios';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import {
  GET_BOOKS,
  TOGGLE_DISPLAY_ALL_BOOKS,
  SORT_BOOKS,
  SET_LOADING,
} from './types';

let nyTimesAPI;
let nyTimesKey;

if (process.env.NODE_ENV !== 'production') {
  nyTimesAPI = process.env.REACT_APP_NY_TIMES_API;
  nyTimesKey = process.env.REACT_APP_NY_TIMES_KEY;
} else {
  nyTimesAPI = process.env.REACT_APP_NY_TIMES_API;
  nyTimesKey = process.env.REACT_APP_NY_TIMES_KEY;
}

const BookState = (props) => {
  const initialState = {
    catelog: 'paperback-nonfiction',
    books: [],
    displayAllBooks: true,
    loading: false,
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // get books
  const getBooks = async () => {
    setLoading();
    try {
      let url = nyTimesAPI;
      url += 'current/';
      url += state.catelog;
      url += '.json';
      const response = await axios.get(url, {
        params: {
          'api-key': nyTimesKey,
        },
      });
      if (response.data.status === 'OK') {
        const books = response.data.results.books;
        dispatch({ type: GET_BOOKS, payload: books });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle display all books
  const toggleDisplayAllBooks = () => {
    dispatch({ type: TOGGLE_DISPLAY_ALL_BOOKS });
  };

  // Sort books
  const sortBooks = (orderBy) => {
    dispatch({ type: SORT_BOOKS, payload: orderBy });
  };

  return (
    <BookContext.Provider
      value={{
        loading: state.loading,
        books: state.books,
        displayAllBooks: state.displayAllBooks,
        getBooks,
        toggleDisplayAllBooks,
        sortBooks,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
