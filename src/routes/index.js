import react, { Fragment } from "react";

import { Route, Routes } from "react-router-dom";

import LoginPage from '../pages/loginPage'
import loginRoute from "../routes/loginRoute";
import ListarPage from "../pages/ListarPage";
import SobrePage from "../pages/SobrePage";


function RoutesM(){
  return(

    <Routes>
    <Route path="/" element={<loginRoute />}/>
    <Route exact path="/login" element={<LoginPage />}/>
    <Route exact path="/listar" element={<ListarPage />}/>
    <Route exact path="/sobre" element={<SobrePage />}/>
    
   </Routes>

  )}

export default RoutesM;