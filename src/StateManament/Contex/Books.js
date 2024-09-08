import { createContext, useState } from 'react';

const BooksContext = createContext({});

export function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueShared = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return <BooksContext.Provider value={valueShared} children={children} />;
}

export default BooksContext;

// import BooksContext, {Provider} from '/Books'
