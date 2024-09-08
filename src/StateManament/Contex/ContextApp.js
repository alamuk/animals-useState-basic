import { useContext } from 'react';
import BooksContext from './Books';

export default function ContextApp() {
  // const value = useContext(BooksContext);
  const { count, incrementCount } = useContext(BooksContext); // here we are destructuring of the BooksContext value Object.
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Add</button>
    </div>
  );
}
