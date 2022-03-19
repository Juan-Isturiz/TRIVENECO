import { useState, useEffect } from "react";
import logo from "./logo.svg";
//import Login from "./Login/Login";
import "./App.css";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import LandPage from "./Pages/LandPage/LandPage";
import Navbar from './Components/NavBar/Navbar';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userloged = localStorage.getItem("isLogedIn");
        if (userloged === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLogedIn", "1");
        setIsLoggedIn(true);
    };
    const logoutHandler = () => {
        localStorage.removeItem("isLogedIn");
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Navbar></Navbar>
            {/* <BurgerMenu /> */}
            <LandPage />
        </div>
    );

}

export default App;
