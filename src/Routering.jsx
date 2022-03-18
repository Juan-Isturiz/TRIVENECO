import {Route,Routes } from "react-router-dom";
import CityViewPage from "./Pages/CityViewPage";
import LoginPage from "./Pages/LoginPage"
import LandPage from "./Pages/LandPage/LandPage";

const Routering =()=>{
    return(
        <Routes>
            <Route  path="/" element={<LandPage/>}></Route>
            <Route  path="/CityView" element={<CityViewPage/>}></Route>
            <Route path="/Login" element ={<LoginPage/>}/>
        </Routes>
    )
}
export default Routering