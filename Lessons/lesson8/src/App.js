import './App.css';
import GistsList2 from './GistList';
import GistList from './GistListEx2';
import PublicGists from './PublicGistsEx2';

function App() {
  return (
    // Обертка для всего приложения
    <div className="App">
      Шапка приложения с заголовком
      <header>
        <h1>Список Gists из GitHub</h1>
      </header>
      Основная часть приложения
      <main>
        {/* <GistList /> */}
        <GistsList2 />
      {/* <PublicGists /> */}
      </main>
      
    </div>
  );
}
export default App;
