import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/Context";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
    const { isLogged } = useContext(UserContext);
    return(isLogged ? <Outlet/> : <Navigate to='/'/>)
};

export default PrivateRoute;
////useEffect(()=>{
//    const history = useNavigate()
//})
//
//if (isLogged) {
//    return <Outlet />
//}
//history('/')
//
//
//
//return <div></div>;