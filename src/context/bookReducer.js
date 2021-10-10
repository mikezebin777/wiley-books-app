import {
  GET_BOOKS,
  TOGGLE_DISPLAY_ALL_BOOKS,
  SORT_BOOKS,
  SET_LOADING,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        displayAllBooks: false,
        loading: false,
      };
    case TOGGLE_DISPLAY_ALL_BOOKS:
      return { ...state, displayAllBooks: !state.displayAllBooks };
    case SORT_BOOKS:
      let orderBy = action.payload;
      let books = state.books;
      switch (orderBy) {
        case 'rank':
          books = books.sort((b1, b2) => {
            return b1.rank - b2.rank;
          });
          break;
        case 'isbn':
          books = books.sort((b1, b2) => {
            let isbn1 = b1.isbns[0].isbn10;
            let isbn2 = b2.isbns[0].isbn10;
            return isbn1.localeCompare(isbn2);
          });
          break;
        default:
          books = books.sort((b1, b2) => {
            return b1[orderBy].localeCompare(b2[orderBy]);
          });
      }
      return { ...state, books };
    default:
      return state;
  }
};
