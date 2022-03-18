import { useState, useEffect } from "react";
import logo from "./logo.svg";
//import Login from "./Login/Login";
import "./App.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import LandPage from "./Pages/LandPage/LandPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);
import { db } from "./utils/firebaseConfig";

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
            <BurgerMenu />
            <LandPage />
        </div>
    );
}

export default App;
