import { useState } from "react";
import "./App.css";
import Routering from "./Routering";
import UserContextProvider from "./Context/Context";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar"
import UploadData from "./Components/UploadData/UploadData"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <UserContextProvider>

                <NavBar />
                <Routering />
                <UploadData/>

            </UserContextProvider>
        </Router>
    );

}

export default App;
