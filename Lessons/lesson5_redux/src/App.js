import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
      
    </div>
  );
}

export default App;
