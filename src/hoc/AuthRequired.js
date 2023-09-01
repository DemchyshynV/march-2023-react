import {authService} from "../services/authService";
import {Navigate, useLocation} from "react-router-dom";

const AuthRequired = ({children}) => {
    const accessToken = authService.getAccessToken();
    const {pathname} = useLocation();


    if (accessToken){
        return children
    }

    return <Navigate to={'/login'} state={pathname}/>
};

export {AuthRequired};