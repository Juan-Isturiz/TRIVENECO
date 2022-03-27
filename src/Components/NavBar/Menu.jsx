import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import { db } from "../../utils/firebaseConfig";

const Menu = (props) => {
    const [usrRol, setRol] = useState(0);
    const getRol = async () => {
        try {
            const userData = await db.collection("users").doc(user.uid).get();
            setRol(userData.data().rol);
        } catch (error) {
            console.log(error.message);
        }
    };
    const { isLogged, loggerOut, user } = useContext(UserContext);
    const history = useNavigate();
    useEffect(() => {
        getRol();
    }, [user]);
    const toLog = () => {
        history("/Signin");
    };

    return (
        <div className={styles.Menu}>
            <ul>
                <Link to="/" onClick={() => setOpen(!open)}>
                    <li>Home</li>
                </Link>
                <Link to="/CityView" onClick={() => setOpen(!open)}>
                    <li>Ciudades</li>
                </Link>
                <Link to="/HotelView" onClick={() => setOpen(!open)}>
                    <li>Hoteles</li>
                </Link>
                <Link to="/Feedback" onClick={() => setOpen(!open)}>
                    <li>Feedback</li>
                </Link>

                {!isLogged ? (
                    <li onClick={toLog}>Log in</li>
                ) : (
                    <div>
                        <li onClick={loggerOut}>Log out</li>
                        {usrRol === 2 && (
                            <>
                                <Link
                                    to="/CityViewPageAdmin"
                                    onClick={() => setOpen(!open)}
                                >
                                    <li> Ciudades-Admin</li>
                                </Link>
                                <Link
                                    to="/HotelViewPageAdmin"
                                    onClick={() => setOpen(!open)}
                                >
                                    <li> Hotel-Admin</li>
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Menu;
