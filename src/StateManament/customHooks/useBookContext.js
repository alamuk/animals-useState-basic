import { useContext } from 'react';
import BooksContext from '../Contex/Books';

function useBookContext() {
  return useContext(BooksContext);
}

export default useBookContext;
