import React from "react";
import CartWidget from "./CartWidget.js";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CarpenterIcon from '@mui/icons-material/Carpenter';


function NavBar(){

    return (
        <>
        <nav id="nav">
            <h2 className="empresa"> Carpinteria Monzón <CarpenterIcon/></h2>
            
                <a href="#">Home</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>   
                <LocalShippingIcon/> 
                <CartWidget/>
        </nav>   
        
        </>
)
}
export default NavBar;