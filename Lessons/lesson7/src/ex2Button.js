import React from 'react';
import { useDispatch } from 'react-redux';

export function Ex2Button() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: 'BUTTON_CLICKED', payload: 'Hello Word' });
    };

    return <button onClick={handleClick}>Click Me</button>;
}