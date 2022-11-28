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
            <NavLink className="nav__link link" to="/productos">Productos</NavLink>
            <NavLink className="nav__link link" to="/productos/fibrofacil">Fibrofacil</NavLink> 
            <NavLink className="nav__link link" to="/productos/maderamaciza">Madera Maciza</NavLink> 
            <NavLink className="nav__link link" to="/Envio"><LocalShippingIcon/></NavLink>
            <NavLink className="nav__link link" to="/Carrito"><CartWidget/></NavLink> 
        </nav>   
        
        </>
)
}
export default NavBar;
