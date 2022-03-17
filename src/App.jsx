<<<<<<< HEAD
import { useState, useEffect } from 'react'
import './App.css'
//import logo from './logo.svg'
//import Login from './Login/Login';
//import { db } from './utils/firebaseConfig';




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

    <div>
      webos
    </div>


  )
}

export default App
=======
import { useState, useEffect } from 'react'
import logo from './logo.svg'
import Login from './Login/Login';
import './App.css'
import { db } from './utils/firebaseConfig';




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

    <div>
    </div>


  )
}

export default App
>>>>>>> 58bb7058aca01323bb9dc13a95ae4d9b53bd9da6
