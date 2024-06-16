import React, { useEffect, useState } from "react";

const InputForm = () => {
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
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            {submittedValue && <p>submitted value: {submittedValue} </p>}
        </div>
    );
};

export default InputForm;


