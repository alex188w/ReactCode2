// Задание 2 (тайминг 25 минут)
// 1. Разработайте компонент Counter, который отображает число и 
// две кнопки: одна для увеличения значения на 1, а другая для 
// уменьшения на 1.
// 2. Используйте хук useState для управления состоянием счётчика.
// 3. Кнопки можно сделать с помощью material ui

import { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(0);
    var text = '';

    const reduceCount = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
            text = 'Счетчик меньше ноля'
        }
    }

    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Счетчик уменьшения/увеличения на 1</h2>
            <Button onClick={reduceCount} variant="contained">Уменьшить на 1</Button>
            <div>{count}</div>
            <Button onClick={increaseCount} variant="contained">Увеличить на 1</Button>
            <h2>{ text }</h2>
        </div>
    );

}

export default Counter;