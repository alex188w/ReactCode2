// Задание 3 (тайминг 25 минут)
// ● Создайте компонент MessagesList, который отображает список 
// сообщений. Каждое сообщение должно иметь уникальный id и 
// текст.
// ● Используйте проп key при рендеринге списка, чтобы 
// обеспечить оптимальную производительность.

import { messages } from "./data";
import { PropTypes } from  "prop-types";
import "./messages.css";
// import React, { useState } from 'react';

// Вариант 1
// export function MessagesList() {
//     const [messages, setMessages] = useState([
//         { id: 'id1', text: "message 1", heading: 'Heading 1' },
//         { id: 'id2', text: "message 2", heading: 'Heading 2'  },
//         { id: 'id3', text: "message 3", heading: 'Heading 3'  },
//     ]);
//     return messages.map((message) => 
//         <>
//             <h2>{message.heading}</h2>
//             <div key={message.id}>{message.text}</div>
//         </>
//     );
// }
// export default MessagesList;

// Вариант 2 c ProtoTypes
export default function MessagesList( { themeColor }) {
        return messages.map((message) => 
            <>                
                <Message themeColor={themeColor} key={message.id} { ...message} />
            </>
        );
    }

    MessagesList.propTypes = {
        themeColor: PropTypes.string,        
    };

function Message ({ text, time, themeColor }) {
    return (
        <>
            <h2 className={themeColor === "light" ? "light" : "dark" }>{ text }</h2>
            <p className={themeColor === "light" ? "light" : "dark" }>Post time: { time }</p>
        </>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    themeColor: PropTypes.string.isRequired,
};