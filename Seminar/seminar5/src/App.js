import { createContext } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import MyHOC from './components/MyHOC';
import Counter from './components/Counter';
import store from './components/store';
import { Provider } from 'react-redux';


// Создаем контексты для темы и заметок
export const ThemeContext = createContext('light');
export const UserContext = createContext('Гость');


function App() {
  const [theme, setTheme] = useState('light');
  const [userName, setUserName] = useState(['Гость']);

  function changeUserName(e) {
    let newUserName = e.target.closest('div').querySelector('input').value;
    setUserName(newUserName);
    newUserName = '';
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == 'light' ? 'dark' : 'light'));
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={userName}>
          <Header />
          <div>
            <input />
            <button onClick={changeUserName}>Edit user name</button>
          </div>
          <Profile />
          <Footer />
          <div>
            <button onClick={toggleTheme}>Change theme</button>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
      <div>
        <MyHOC />
      </div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
