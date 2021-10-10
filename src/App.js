import './App.css';
import BookState from './context/BookState';
import Navbar from './components/Navbar';
import Sort from './components/Sort';
import Books from './components/Books';

function App() {
  return (
    <BookState>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <h1 className='title main'>Paperback Nonfiction Bestsellers</h1>
          <Sort />
          <Books />
        </div>
      </div>
    </BookState>
  );
}

export default App;
