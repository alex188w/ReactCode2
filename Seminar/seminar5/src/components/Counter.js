// Задание 3 (тайминг 25 минут)
// Создать простое приложение счетчика, которое увеличивает или 
// уменьшает значение на 1.
// ● Action types: INCREMENT, DECREMENT.
// ● Actions: Создайте два действия: одно для увеличения счетчика 
// и другое для его уменьшения.
// ● Reducer: Реализуйте редьюсер, который обрабатывает эти 
// действия и изменяет состояние счетчика соответствующим 
// образом.
// ● Component: Создайте компонент, который отображает счетчик 
// и имеет кнопки для его увеличения и уменьшения.

// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment, incrementByAmount } from './store.js';

// function Counter() {
//     const count = useSelector((state) => state.counter.value);
//     const dispatch = useDispatch();

//     const increment = () => {
//         dispatch({ type: 'INCREMENT' });
//       };
    
//       const decrement = () => {
//         dispatch({ type: 'DECREMENT' });
//       };
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={() => dispatch(decrement())}>Decrement</button>
//             <button onClick={() => dispatch(increment())}>Increment</button>
//             {/* <button onClick={() => dispatch(incrementByAmount(5))}>+5</button> */}
//         </>
//     );
// }

// export default Counter;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Счетчик {counter}</h1>
      <button onClick={increment}> Увеличить </button>
      <button onClick={decrement}> Уменьшить </button>
    </div>
  )
}
export default Counter;