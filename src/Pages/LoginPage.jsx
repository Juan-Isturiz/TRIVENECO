import Login from "../Components/Login/Login";
import { useEffect } from "react";
import { db, auth, googleProvider } from "../utils/firebaseConfig";

const LoginPage =()=>{

    
    return(
        <>
        <Login />
        </>
    )
}
export default LoginPage