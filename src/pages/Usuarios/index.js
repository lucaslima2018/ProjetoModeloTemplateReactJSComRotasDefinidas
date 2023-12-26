import React from "react";
import Sidebar from "../../components/Sidebar";
import FullFeaturedCrudGrid from "../../components/FullFeaturedCrudGrid";

function Usuarios() {

    return (
        <Sidebar>
            <div>
                <h1>Usuários</h1>
                <FullFeaturedCrudGrid />
            </div>
        </Sidebar>
    );
}

export default Usuarios;