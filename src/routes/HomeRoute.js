import { Navigate } from "react-router-dom";
const homeRoute = ()=>{
    return <Navigate to={{ pathname: "/login" }} />;
}

export default homeRoute;