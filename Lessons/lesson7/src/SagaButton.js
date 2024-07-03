import React from "react";
import { useDispatch } from "react-redux";

function SagaButton() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'LOAD_DATA' });
    };

    return <button onClick={handleClick}>Нажимай для работы с Saga</button>
}

export default SagaButton;