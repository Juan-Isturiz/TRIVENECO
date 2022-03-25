import {Route,Routes } from "react-router-dom";
import CityViewPage from "./Pages/CityViewPage";
import LoginPage from "./Pages/LoginPage"
import LandPage from "./Pages/LandPage";
import RegisterPage from "./Pages/RegisterPage";

const Routering =()=>{
    return(
        <Routes>
            <Route  path="/" element={<LandPage/>}></Route>
            <Route  path="/CityView" element={<CityViewPage/>}></Route>
            <Route path="/Signin" element ={<LoginPage/>}/>
            <Route path="/Signup" element={<RegisterPage/>}/>

        </Routes>
    )
}
export default Routering