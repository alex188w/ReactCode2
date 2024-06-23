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