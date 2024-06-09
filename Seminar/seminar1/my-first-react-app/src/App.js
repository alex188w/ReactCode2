import './App.css';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/eventCard';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <h1>Мой первый проект</h1>  
      <Greeting />   
      <CurrentTime />
      <EventCard className='eventCard' name="завтрак" date="утро" location="ресторан" />
      <EventCard className='eventCard' name="обед" date="полдень" location="ресторан" />
      <EventCard className='eventCard' name="ужин" date="вечер" location="ресторан" />
    </div>
  );
}

export default App;
