import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./async/tasksSlice";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.entities);
  const loading = useSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Список задач</h1>
      {loading ? (
        <p>Загрузка списка задач...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}: {task.completed}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
