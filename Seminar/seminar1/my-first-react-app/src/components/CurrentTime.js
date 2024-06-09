import { useState } from "react";
function CurrentTime() {
    const time = new Date().toLocaleTimeString();
    const hours = new Date().getHours();
    if (hours >= 12) {
        return (
            <h1 className="time">Добрый день! Текущее время: {time}</h1>
        )
    }
    else return (
        <h1 className="time">Добрый утро! Текущее время: {time}</h1>
    );
}

// <h1 className="time">Текущее время: {time}</h1>


export default CurrentTime;