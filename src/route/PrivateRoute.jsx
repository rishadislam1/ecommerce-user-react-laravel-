import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children})=>{
    const isLoggedIn = useAuth();
    const location = useLocation();


    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
}

export default PrivateRoute;