import { Route, Routes } from "react-router-dom";
import CityViewPage from "./Pages/CityViewPage";
import HotelViewPage from "./Pages/HotelViewPage";
import LoginPage from "./Pages/LoginPage";
import LandPage from "./Pages/LandPage";
import RegisterPage from "./Pages/RegisterPage";
import CityViewPageAdmin from "./Pages/CityViewPageAdmin";
import HotelViewPageAdmin from "./Pages/HotelViewPageAdmin";
import CiudadParticular from "./Components/Particular/CiudadParticular";
import HotelParticular from "./Components/Particular/HotelParticular";
import AddHab from "./Pages/AddHab.jsx";
import UserProfile from "./Pages/UserProfile";
import Reservation from "./Components/Reservation/Reservation";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminRightsPage from "./Components/PrivateRoute/AdminRightsPage";
const Routering = () => {
    return (
        <Routes>
            <Route path="/" element={<LandPage />}></Route>
            <Route path="/CityView" element={<CityViewPage />}></Route>
            <Route path="/HotelView" element={<HotelViewPage />}></Route>
            <Route path="/Signin" element={<LoginPage />} />
            <Route path="/Signup" element={<RegisterPage />} />
            <Route
                path="/CityViewPageAdmin"
                element={<AdminRightsPage />}
            >
                <Route
                    path="/CityViewPageAdmin"
                    element={<CityViewPageAdmin />}
                ></Route>
            </Route>
            <Route
                path="/HotelViewPageAdmin"
                element={<AdminRightsPage />}
            >
                <Route
                    path="/HotelViewPageAdmin"
                    element={<HotelViewPageAdmin />}
                />
            </Route>
            <Route
                path="/CiudadParticular/:id"
                element={<CiudadParticular />}
            ></Route>
            <Route
                path="/HotelParticular/:id"
                element={<HotelParticular />}
            ></Route>
            <Route
                path="/AddHab/:id"
                element={<AdminRightsPage />}
            >
                <Route path="/AddHab/:id" element={<AddHab />} />
            </Route>
            <Route path="/Perfil" element={<PrivateRoute />} >
                <Route path="/Perfil" element={<UserProfile />} />
            </Route>
            <Route path="/Reservation/:id/:type" element={<PrivateRoute />} >
                <Route
                    path="/Reservation/:id/:type"
                    element={<Reservation />}
                />
            </Route>
        </Routes>
    );
};
export default Routering;
