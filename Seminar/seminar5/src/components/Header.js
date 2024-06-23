// Задание 1 (тайминг 25 минут)
// ● Создайте контексты UserContext и ThemeContext с начальными 
// значениями (например, имя пользователя: "Гость", тема: "светлая").
// ● Реализуйте компонент App:
// ○ Оберните дочерние компоненты в UserContext.Provider и 
// ThemeContext.Provider.
// ○ Добавьте возможность изменения имени пользователя и 
// темы через интерфейс пользователя.
// ● Создайте компоненты, использующие эти контексты:
// ○ Header должен отображать приветствие с именем 
// пользователя.
// ○ Profile может показывать более детальную информацию о 
// пользователе или просто использовать тему для стилизации.
// ○ Footer должен использовать тему для стилизации и, 
// возможно, отображать копирайт с текущим годом.
// ● Добавьте возможность изменения темы и имени пользователя в 
// интерфейсе, используя состояние в компоненте App и передавая 
// функции для изменения через контекст.

import { useContext } from "react";
import { UserContext, ThemeContext } from "../App.js";
import classes from './Profile.css';

function Header() {

    const userName = useContext(UserContext);
    const theme = useContext(ThemeContext);

    return (
        // <div>
        //     <h2>Привет, {userName}</h2>
        // </div>
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <h2>Привет, {userName}</h2>
        </div>
    );
}

export default Header;