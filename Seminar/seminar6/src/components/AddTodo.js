import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/TodoListslice";
import { useState } from "react";

export default function AddTodo({ todos }) {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    function inputHandler(e) {
        setTodo(e.target.value);
    }

    function addNewTodo(e) {
        dispatch(addTodo({ id: + todos.length + 1, text: `${todo}` }));
        e.target.closest('div').querySelector('input').value = '';
    }

    return (
        <div>
            <label htmlFor="todo">Enter new todo</label>
            <input
                id="todo"
                type="text"
                value={todo}
                onChange={(e) => inputHandler(e)}
            />
            <button onClick={(e) => addNewTodo(e)}>Add new todo</button>
        </div>
    );
}