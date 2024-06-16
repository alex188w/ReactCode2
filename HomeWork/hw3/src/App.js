import './App.css';
import TemperatureConverter from './components/temperatureConverter';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
