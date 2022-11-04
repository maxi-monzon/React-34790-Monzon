import React from "react"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


const CartWidget = () =>{
    return(
        
                <a id="shopcart">
                <LocalGroceryStoreIcon/>
                <div id="cart_items">0</div>
                
                </a>

    )
}

export default CartWidget; 