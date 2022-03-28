import { useContext } from "react";
import "./App.css";
import Routering from "./Routering";
import UserContextProvider from "./Context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import PaypalCheckoutButton from "./Components/Checkout/Checkout";
import Navbar from "./Components/NavBar/NavBar";


function App() {
    return (
        <Router>
            <UserContextProvider>
                <Navbar/>
                <Routering />
                <Footer />
            </UserContextProvider>
        </Router>

    );
}

export default App;
