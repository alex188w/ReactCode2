import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CounterComponent from './components/CounterComponent';
import ButtonComoinent from './components/ButtonComoinent';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <CounterComponent />
          <ButtonComoinent />
        </div>        
      </Provider>      
    </div>
  );
}
export default App;

