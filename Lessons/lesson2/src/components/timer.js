import { useEffect, useState } from "react";
function Timer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])
    // , []) - чтобы отрабатывало и в момент монтирования и в момент обновления
    return (
        <div>
            <p>Время {time.toLocaleTimeString()}</p>
        </div>
    )
}
export default Timer;