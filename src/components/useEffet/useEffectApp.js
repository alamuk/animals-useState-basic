import { useEffect, useState } from 'react';

function useEffectApp() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const listener = () => {
      console.log(counter);
    };
    document.body.addEventListener('click', listener);

    const cleanUp = () => {
      document.body.removeEventListener('click', listener);
    };

    return cleanUp();

    // return () => {
    //   document.body.removeEventListener('click', listener);
    // };
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  );
}

export default useEffectApp;
