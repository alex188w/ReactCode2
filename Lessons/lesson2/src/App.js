import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import { MessagesList } from './components/messagesList';


function App() {
  // const 
  return (
    <div className="App">    
    <Timer />  
     <Counter />
     <Show data="Новый текст параграфа"/>
     <Show data="Другой текст параграфа"/>
     <MessagesList />
    </div>
  );
}

export default App;
