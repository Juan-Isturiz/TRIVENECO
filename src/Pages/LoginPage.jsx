import Login from "../Components/Login/Login";
import { useEffect } from "react";
import { db, auth, googleProvider } from "../utils/firebaseConfig";
import Header from "../Components/Header/Header";
import LoginHeader from "../Components/Login/LoginHeader";

const LoginPage =()=>{

    
    return(
        <div>
            <LoginHeader />
            <Login />
        </div>
    )
}
export default LoginPage