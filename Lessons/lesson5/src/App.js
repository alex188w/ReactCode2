import './App.css';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';


// Задание 2
/* Использвание createContext в переключателе тем */
// Шаг 1 Создаем контекст
// const ThemeContext = createContext();
// // Компонент, использующий контекст
// const ThemeButton = () => {
//   // Шаг 2 используем useContext для доступа к контексту
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }} >
//       Themed Button
//     </button>
//   )
// }


/* EX 3 - Расширение Использвание createContext в переключателе тем */
// Создаем контексты для темы и заметок
const ThemeContext = createContext();
const NotesContext = createContext();
// Создаем пользовательские уки для удобства ипользования контекстов
const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);

// Компонент, отбражающий список заметок
const NotesList = () => {
  const { notes } = useNotes();
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

// Компонент, розволяющий добавлять заметки
const NoteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { addNote } = useNotes();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue('');
  }

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Добавить</button>
    </div>

  )
}

// Компонент для переключения темы
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>Нажми, чтобы переключить на {theme === 'light' ? 'темную' : 'светлую'} тему</button>
  );
};

// Компонент, который устанавливает контекст
function App() {
  // Шаг 3 Определяем состояние, которое будет перердаваться через контекст
  // const [theme, setTheme] = useState({
  //   background: 'lightgray',
  //   foreground: 'black',
  // });


  const [theme, setTheme] = useState('light');
  const [notes, setNotes] = useState(['Элемент списка 1', 'Элемент списка 2']);
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };
  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };
  return (
    <div className="App">

      {/* <ThemeContext.Provider value={theme}>
        <div>
          <h1>Ипользование React.Context</h1>
          <ThemeButton />
          <button onClick={() =>
            setTheme({
              background: 'black',
              foreground: 'white',
            })
          }
          >
            Сменить тему
          </button>
        </div>
      </ThemeContext.Provider> */}


      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NotesContext.Provider value={{ notes, addNote }}>
        <div className='content' style={{ 
          color: theme=== 'light' ? 'black' : 'white',
          background: theme === 'light' ? 'white' : 'black',
          }}>
          <h1>список</h1>
          <ThemeToggle />
          <NotesList />
          <NoteInput />
          
        </div>
      </NotesContext.Provider>
      </ThemeContext.Provider>

      <hq>Пример 4 Компоненты высшего порядка (НОС) с функциональными компонентами</hq>
      <StyleButton />
      <StyleButton2 />
      <StyleText />
      <ClickCounterWidhtCounyerAndProps message='счетчик кликов' />
      <ClickCounterWidhtCounyerAndProps message='счетчик новых кликов' />
    </div>
  );
}

// НОС - компоненты высшего порядка

// НОС для доюавления стилей к кокмпоненту
const withStyles = (WrappedComponent, styles) => {
  return (props) => {
    const newProps = { ...props, styles };
    return <WrappedComponent {...newProps} />;
  };
};

//  Компонент, который будет обернут в стили
const Button = ({ styles }) => {
  return (
    <button style={styles}>Click My</button>
  );  
};
const Text = ({ styles }) => {
  return (
    <p style={styles}>text</p>
  );  
};

// Используем НОС для добавления стилей к компоненту Button
const StyleButton = withStyles(Button, {background: 'blue', color: 'white'});
const StyleButton2 = withStyles(Button, {background: 'green', color: 'red'});
const StyleText = withStyles(Text, {background: 'grey', color: 'black'});

// Используем НОС для добавления стилей к компоненту Счетчика
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    }
    const newProps = {
      count, incrementCount, ...props,
    };
    return <WrappedComponent {...newProps} />;
  };
};
// Компонент, который будут обернут с счетчиком и другими пропсами
const ClickCounter = ({ count, incrementCount, message}) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={incrementCount}>Click me</button>
      <p>Clicked {count} times</p>
    </div>
  )
}

// Используем НОС для добавления счетчика к компоненту ClickCounter и передаем другие пропсы
const ClickCounterWidhtCounyerAndProps = withCounter(ClickCounter);
export default App;
