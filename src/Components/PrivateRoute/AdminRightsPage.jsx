import { useContext } from "react";
import { UserContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router-dom";
import { currentLog } from "../../utils/firebaseConfig";
const AdminRightsPage = () => {
    const { rol } = useContext(UserContext);
    console.log(rol)
    return(rol===2 ? <Outlet/> : <Navigate to='/'/>)
};

export default AdminRightsPage;