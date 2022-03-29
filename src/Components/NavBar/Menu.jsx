import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import { db } from "../../utils/firebaseConfig";

const Menu = (props) => {

    const { isLogged, loggerOut, user, rol } = useContext(UserContext);
    const history = useNavigate();

    const toLog = () => {
        history("/Signin");
    };

    return (
        <div className={styles.Menu}>
            <ul>
                <Link to="/" >
                <li>Home</li>
            </Link>
            <Link to="/CityView" >
                <li>Ciudades</li>
            </Link>
            <Link to="/HotelView" >
                <li>Hoteles</li>
            </Link>

            {!isLogged ? (
                <li onClick={toLog}>Log in</li>
            ) : (
                <ul>
                    {rol === 2 ?
                        <>
                            <Link
                                to="/CityViewPageAdmin"

                            >
                                <li> Ciudades-Admin</li>
                            </Link>
                            <Link
                                to="/HotelViewPageAdmin"

                            >
                                <li> Hotel-Admin</li>
                            </Link>
                        </> : <></>
                    }
                    <Link to="/Perfil"><li>Edit profile</li></Link>
                    <li onClick={loggerOut}>Log out</li>
                </ul>
            )}
        </ul>
        </div >
    );
};

export default Menu;
