import './App.css';
import Counter from './components/counter';
import TextInput from './components/textInput';
import Timer from './components/timer';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <Counter />
      <TextInput />
      <Timer />
      <TodoList />
    </div>
  );
}

export default App;
