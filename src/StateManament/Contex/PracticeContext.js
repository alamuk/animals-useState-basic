import { useContext } from 'react';
import BooksContext from './Books';

export default function PracticeContext() {
  const { count } = useContext(BooksContext);
  return <div>{count}</div>;
}
