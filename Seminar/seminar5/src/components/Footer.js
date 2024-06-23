import { useContext, useState } from "react";
import { ThemeContext } from "../App";

function Footer() {

    const theme = useContext(ThemeContext);
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);

    return (
        <>
            <section className={theme === 'light' ? 'light' : 'dark'}>
                <h2>Footer</h2>
                <p>© 2024</p>
                <p>Time: {now.toLocaleTimeString()}</p>
            </section>
        </>
    );
}

export default Footer;