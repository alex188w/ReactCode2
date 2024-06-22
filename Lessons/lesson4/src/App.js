import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <>
        {
          console.log(
            <DivWithChild>
              <p>Новый текст</p>
              <div>Новый элемент div</div>
            </DivWithChild>
          )
        }

        <div>
          <h2>Пример 2 использования "children"</h2>
          <BorderComp>
            <p>Этот абзац находится внутри рамки</p>
            <button>Кнопка внутри рамки</button>
          </BorderComp>
          <BorderComp>
            <p>Новый заголовок</p>
          </BorderComp>
          <p>Этот абзац находится снаружи рамки</p>
        </div>

        <div>
          <h2>Пример 3 использования "props.children"</h2>
          <Card Card title="Карточка 1">
            <p>Это содержимое первой карточки</p>
            <button>Действие</button>
          </Card>
          <Card Card title="Карточка 2">
            <p>Это содержимое второй карточки</p>
            <a href="#">Ссылка</a>
          </Card>
        </div>
        <div>
          <h1>Пример Render Props с функциональными компонентами</h1>
          <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
        </div>
      
      </>
    </div>
  );
}

function DivWithChild({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

const Card = ({ title, children }) => {
  // function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{title}</h2>
      <h2>Любой рекламный текст от родителя</h2>
      {children}
    </div>
  )
}

const BorderComp = ({ children }) => {
  return (
    <div style={{ border: '2px solid #000', padding: '16px' }}>
      {children}
    </div>
  )
}

// ------------------------------------------------------------------------------------
// компонент для остлеживания положения курсора мыши
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {/* // Внутри рендер проп используем переданную функцию */}
      {render(position)}
    </div>
  )
}

// компонент, который использует Render prop для рендеринга информациии о положении курсора
const MouseInfo = ({ x, y }) => {
  return (
    <div>
      <h2>Положение курсора мыши</h2>
      <p>X: {x}, Y: {y}</p>
    </div>
  )
}

export default App;
