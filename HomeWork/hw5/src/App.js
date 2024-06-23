// Урок 5. Компоненты высшего порядка знакомство с Redux
// Приложение для переключения темы сайта
// Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.

// Функционал:

// Action types: TOGGLE_THEME.
// Actions: Создайте действие для переключения темы.
// Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
// Component: Создайте компонент, который отображает переключатель для изменения темы сайта.

// Описание:

// Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").

// Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.

import { Provider } from 'react-redux';
import store from './components/store';
import ThemeToggle from './components/ToggleTheme';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <ThemeToggle>
        <div>
          <h1>Практическое задание 5</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui est libero temporibus. praesentium temporibus ea dicta, sapiente asperiores! Rerum.</p>
        </div>
      </ThemeToggle>
    </Provider>
    </div>
  );
}

export default App;
