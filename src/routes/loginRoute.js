import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../contexts/Auth";


const loginRoute = () => {
    return isAuthenticated() ? <Outlet /> :  <Navigate to={{ pathname: "/listar" }} />;
};

export default loginRoute;