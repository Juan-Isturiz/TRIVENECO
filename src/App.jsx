import { useState, useEffect } from 'react'
import logo from './logo.svg'
/*import Login from './Login/Login';*/
import './App.css'
import { db } from './utils/firebaseConfig';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error"
import SingleRoom from "./Pages/SingleRoom"
import Home from "./Pages/Home"
import Rooms from "./Pages/Rooms"
import NavBar from "./Components/navbar"
import Logo from "./Components/logo"




function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userloged = localStorage.getItem('isLogedIn')
    if (userloged === '1') {
      setIsLoggedIn(true);
    }

  }, [])


  const loginHandler = (email, password) => {
    localStorage.setItem('isLogedIn', '1')
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem('isLogedIn')
    setIsLoggedIn(false);
  };


  return (
    <Router>
        <Logo/>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/rooms/:link" element={<SingleRoom />} ></Route>
            <Route exact path="/rooms" element={<Rooms />} ></Route>
            <Route path="*" element={<Error />} ></Route>
        </Routes>
    </Router>


  )
}

export default App
