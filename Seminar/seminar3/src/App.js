import './App.css';
import Counter from './components/counter';
import Greeting from './components/greeting';
import MessagesList from './components/messagesList';
import TextDisplayForm from './components/textDisplayForm';
import ThemeSwitcher from './components/themeSwitcher';

function App() {
  const name="Алексей";
  return (
    <div className="App">
      <Greeting name={ name } />
      <Counter />
      {/* <MessagesList /> */}
      <ThemeSwitcher />
      <TextDisplayForm />
    </div>
  );
}

export default App;
