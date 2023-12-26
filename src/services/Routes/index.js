import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Usuarios from "../../pages/Usuarios";
import Erro from "../../pages/Erro";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Login/> } />
                <Route path="/home" element={ <Home/> } />
                <Route path="/usuarios" element={ <Usuarios/> } />

                <Route path="*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;