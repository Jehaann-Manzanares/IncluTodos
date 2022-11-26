import React from "react";
import imgtipouser from "../resources/rolactivo.png"
import { useNavigate } from "react-router-dom";

function TipoUsuario(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/Resources`; 
      navigate(path);
    }
    return(
        <div>
            <img src={imgtipouser} alt="tipos de usuarios"  onClick={routeChange}></img>
        </div>
    )
}

export default TipoUsuario