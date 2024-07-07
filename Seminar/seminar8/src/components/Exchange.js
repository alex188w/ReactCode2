// Задание 2 (тайминг 55 минут)
// Разработать приложение на React, которое позволит пользователю конвертировать заданное количество 
// рублей (RUB) в выбранную иностранную валюту по актуальному курсу
// 1. Создайте новый проект
// 2. Выбираем любой доступный API или https://www.exchangerate-api.com/
// 3. В интерфейсе должно быть минимум три элемента управления:
// a. Поле ввода для указания количества рублей (RUB), которые пользователь хочет 
// конвертировать.
// b. Поле ввода для указания кода целевой валюты (например, USD, EUR).
// c. Кнопка для выполнения операции конвертации.
// 4. URL запроса к API `https://v6.exchangerate-api.com/v6/Ваш Ключ/latest/RUB`;
// 5. Пользователь может ввести количество рублей и код целевой валюты, нажать на кнопку и увидеть 
// результат конвертации.

import { useEffect, useState } from "react";
import axios from 'axios';

const apiKey = '2892278fb8ce09c3ccff36a4';
const urlExchangeApi = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
const urlExchangeApiCodes = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
const defaultCurrency = 'RUB';

const Exchange = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [currencyList, setCurrencyList] = useState([]);
    const [result, setResult] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const getCurrencyList = async () => {
            try {
                const response = await axios.get(urlExchangeApiCodes);
                setCurrencyList(response.data.supported_codes);
            } catch (error) {
                console.error('Ошибка получения кодов валют: ', error);
            }
        };
        getCurrencyList();
    }, []);

    useEffect(() => {
        localStorage.setItem('exchange_results', results);
    }, [results]);

    const handleIiputChange = async () => {
        try {
            const response = await axios.get(urlExchangeApi + defaultCurrency);
            const { conversion_rates } = response.data;
            const conversion_rate = conversion_rates[currency];
            const convertedAmount = (amount * conversion_rate).toFixed(2);
            setResult(`${amount} ${defaultCurrency} = ${convertedAmount} ${currency}`);
            if (result) {
                setResults([...results, result]);
            }
        } catch (error) {
            console.error('Ошибка конвертации валюты: ', error);
        }
    };

    return (
        <>
            <h1>Конвертер</h1>
            <input
                type="number"
                min={0}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Сумма в рублях"
            />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value=''>Выберите валюту</option>
                {currencyList.map((currency, index) => (
                    <option key={index} value={currency[0]}>
                        {currency[1]}
                    </option>
                ))}
            </select>
            <button onClick={handleIiputChange}>Конвертировать</button>
            {result && <p>{result}</p>}

            {results.map((result) => (
                <div key={Date.now()}>
                    <p>{result}</p>
                </div>
            ))}
        </>
    );
}

export default Exchange;