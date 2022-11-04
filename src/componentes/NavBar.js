import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.js";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CarpenterIcon from '@mui/icons-material/Carpenter';


function NavBar(){

    return (
        <>
        <nav id="nav">
            <h2 className="empresa"> Carpinteria Monzón <CarpenterIcon/></h2>
            <NavLink className="nav__link link" to="/Home">Home</NavLink>
            <NavLink className="nav__link link" to="/Productos">Productos</NavLink>
            <NavLink className="nav__link link" to="./Contactos">Contactos</NavLink> 
            <NavLink className="nav__link link" to="./Envio"><LocalShippingIcon/></NavLink>
            <NavLink className="nav__link link" to="./Carrito"><CartWidget/></NavLink> 
        </nav>   
        
        </>
)
}
export default NavBar;
