import { Route, Routes } from "react-router-dom";
import { Fragment } from 'react'

import LoginPage from '../pages/loginPage.tsx'
import ListarPage from "../pages/ListarPage.jsx";
import SobrePage from "../pages/SobrePage.jsx";
import CadastroPage from "../pages/CadastroPage.jsx";
import PrivateRoute from "./privateRoute";
import LoginRoute from '../routes/loginRoute';
import HomeRoute from "./HomeRoute";

function RoutesM(){
  return(
    <Fragment>
    <Routes>
        <Route exact path='/' element={<HomeRoute/>}/>
        <Route  path="/login" element={<LoginPage/>}>
            <Route exact path="/login" element={<LoginRoute/>}/>
        </Route>
        
        <Route  path="/cadastro" element={<PrivateRoute/>} >
            <Route  path="/cadastro" element={<CadastroPage/>} />
        </Route>


        <Route  path="/listar" element={<PrivateRoute/>} >
            <Route  path="/listar" element={<ListarPage/>} />
        </Route>

        
        <Route  path="/sobre" element={<SobrePage/>} />
        
    </Routes>
</Fragment>

  )
}

export default RoutesM;