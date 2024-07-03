// Урок 7. Redux middlewares. Redux persist
// Имитация асинхронной загрузки и отображения списка задач из локального хранилища.

// 1. Инициализация проекта и установка зависимостей: Инициализируйте новый проект React . Установите @reduxjs/toolkit и react-redux.

// 2. Создание локальных данных: Определите массив объектов, представляющих задачи, в файле, например, src/data/tasks.js. Каждая задача может содержать поля, такие как id, title и completed.

// 3. Настройка Redux store: Создайте Redux store с использованием configureStore из @reduxjs/toolkit. Используйте Redux Thunk middleware, уже включённый в @reduxjs/toolkit.

// 4. Создание асинхронного действия с использованием Thunk: Используйте createAsyncThunk для создания асинхронного действия, которое "загружает" данные задач из локального файла. Хотя данные и локальные, имитируйте асинхронное поведение, например, с использованием setTimeout.

// 5. Работа с компонентом: Используйте хуки useDispatch и useSelector в компоненте для диспетчеризации асинхронного действия и выборки списка задач из состояния. Выведите список задач.

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTasks } from "../reducer/taskSlice";

function TasksList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.taskSlice);
    const loadStatus = useSelector((state) => state.tasks.loadStatus);

    const handleButtonClick = () => {
        dispatch(getTasks());
    };
    return (
        <div>
            <h1>Практическое задание 7</h1>
            <button onClick={handleButtonClick}>Загрузить данные пользователя</button>
            {loadStatus === "loading" && <div>Данные загружаются...</div>}
            {loadStatus === "failed" && <div>Ошибка загрузки данных</div>}
            {loadStatus === "success" && (
                <div>
                    <h3>Данные загружены!</h3>
                    <h2>Текущий список задач</h2>
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                <p>{task.title}</p>
                                <i style={{ color: task.completed === "выполнено" ? 'green' : 'red' }}>статус: {task.completed === "выполнено" ? "Выполнено" : "Выполняется"}</i>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TasksList;