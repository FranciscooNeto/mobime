import { Navigate } from "react-router-dom";

const homeRoute = ()=>{
    return <Navigate to={{ pathname: "/" }} />;
}

export default homeRoute;