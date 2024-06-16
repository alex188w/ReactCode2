// Задание 4 (тайминг 25 минут)
// Создать React компонент TextDisplayForm, который позволяет пользователю ввести 
// текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию 
// кнопки.
// ● Создание поля ввода (TextField)
// ○ Добавить TextField для ввода текста пользователем.
// ○ Установить метку (label) поля ввода на "Введите текст".
// ○ Сделать поле ввода на всю ширину (fullWidth).
// ● Разместить кнопку под полем ввода.
// ○ Установить текст кнопки на "Отобразить текст".
// ○ При нажатии на кнопку введенный текст должен отображаться под 
// кнопкой.
// ● Отображение введенного текста
// ○ Использовать состояние для хранения введенного и отображаемого текста.
// ○ При нажатии на кнопку текст из поля ввода должен отображаться в 
// стилизованной карточке (Card) под кнопкой.
// ● Стилизация отображаемого текста
// ○ Для отображения текста использовать компонент Typography с вариантом 
// h5

import { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material"

function TextDisplayForm() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    useEffect(() => {
        console.log('Input value changed:', inputValue);
    }, [inputValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Введите текст"
                    variant="outlined"
                    value={inputValue}
                    style={{ marginBottom: 20 }}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    style={{ marginBottom: 20 }}
                    type="submit">Отобразить текст</Button>
            </form>
            {submittedValue && <Typography variant="h5">{submittedValue}</Typography>}
        </div>

    );
}

export default TextDisplayForm;