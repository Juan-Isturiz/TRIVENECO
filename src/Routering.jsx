import {Route,Routes } from "react-router-dom";
import CityViewPage from "./Pages/CityViewPage";
import HotelViewPage from "./Pages/HotelViewPage";
import LoginPage from "./Pages/LoginPage"
import LandPage from "./Pages/LandPage/LandPage";
import Register from "./Components/Register/Register"
import CityViewPageAdmin from "./Pages/CityViewPageAdmin"
import HotelViewPageAdmin from "./Pages/HotelViewPageAdmin"

const Routering =()=>{
    return(
        <Routes>
            <Route  path="/" element={<LandPage/>}></Route>
            <Route  path="/CityView" element={<CityViewPage/>}></Route>
            <Route  path="/HotelView" element={<HotelViewPage/>}></Route>
            <Route path="/Login" element ={<LoginPage/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route  path="/CityViewPageAdmin" element={<CityViewPageAdmin/>}></Route>
            <Route  path="/HotelViewPageAdmin" element={<HotelViewPageAdmin/>}></Route>
        </Routes>
    )
}
export default Routering