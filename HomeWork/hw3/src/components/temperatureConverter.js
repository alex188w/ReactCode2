// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const onChangeCelsius = (e) => {
        setCelsius(e.target.value)
        setFahrenheit('')

        if (!isNaN(e.target.value) && e.target.value) setFahrenheit(((e.target.value * 9 / 5) + 32).toFixed(2))
    };

    const onChangeFahrenheit = (e) => {
        setFahrenheit(e.target.value)
        setCelsius('')

        if (!isNaN(e.target.value) && e.target.value) setCelsius(((e.target.value - 32) * 5 / 9).toFixed(2))
    };

    const clear = () => {
        setCelsius('');
        setFahrenheit('');
    };

    return (
        <div>
            <h2>Температурный конвертер</h2>
            <TextField
                style={{ margin: '20px' }}
                label="Градус Цельсия (°C)"
                variant="outlined"
                onChange={onChangeCelsius}
                value={celsius}
            /> 
            <span>&lt;&#45;&gt;</span>
            <TextField
                style={{ margin: '20px' }}
                label="Градус Фаренгейта (°F)"
                variant="outlined"
                onChange={onChangeFahrenheit}
                value={fahrenheit}
            />
            <div>
                <Button onClick={clear} variant="contained">Очистить ввод</Button>
            </div>
        </div>
    );
}

export default TemperatureConverter;