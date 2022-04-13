import react, { Fragment } from "react";

import { Route, Routes } from "react-router-dom";

import LoginPage from '../pages/loginPage'
import loginRoute from "../routes/loginRoute";

function RoutesM(){
  return(
  
    <Routes>
    <Route path="/" element={<loginRoute />}>
      <Route exact path="/login" element={<LoginPage />}/>
    </Route>
    </Routes>

  )}

export default RoutesM;