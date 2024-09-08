import './App.css';

import ContextApp from './StateManament/Contex/ContextApp';
import { Provider } from './StateManament/Contex/Books';

function App() {
  return (
    <Provider>
      <ContextApp />
    </Provider>
  );
}

export default App;
