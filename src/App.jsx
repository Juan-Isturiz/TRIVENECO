import { useState, useEffect } from 'react'
import logo from './logo.svg'
import Login from './Login/Login';
import './App.css'
import CityView from './Pages/CityView/cityview'

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
    <CityView></CityView>
  )
}

export default App
