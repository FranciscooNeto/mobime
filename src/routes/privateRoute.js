import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from '../contexts/Auth';

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> :  <Navigate to={{ pathname: "/login" }} />;
};

export default PrivateRoute;
