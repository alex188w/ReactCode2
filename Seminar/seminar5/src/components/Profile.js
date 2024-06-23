import { useContext } from "react";
import classes from './Profile.css';
import { ThemeContext } from "../App";

function Profile() {

    const theme = useContext(ThemeContext);

    return (
        <div className={theme === 'light' ? 'light' : 'dark'}>
            <h3>Profile</h3>
            <p>
                Lorem ipsum dolor sit amet
            </p>
        </div>
    );
}

export default Profile;