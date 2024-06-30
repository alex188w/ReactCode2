import React, {useContext} from 'react';
import { FilterContext } from '../contexts/FilterContext';

const TodoFilter = () => {
    // Получаем текущий фильтр из контекста
    const { filter, setFilter } = useContext(FilterContext);

    const handleChange = (e) => {
        // устанавливаем выбранный фильтр
        setFilter(e.target.value);
    };
    
    return (
        <select value={filter} onChange={handleChange}>
            <option value="all">Все</option>
            <option value="completed">Выполненные</option>
            <option value="active">Активные</option>
        </select>
    );
};

export default TodoFilter;