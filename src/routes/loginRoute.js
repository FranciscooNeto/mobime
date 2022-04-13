import { Navigate } from "react-router-dom";

const loginRoute = ()=>{
    return <Navigate to={{ pathname: "/login" }} />;
}

export default loginRoute;