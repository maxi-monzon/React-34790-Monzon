import { useState } from "react"
import ItemCount from "./ItemCount"
import { useCarrito } from "./CustomProvider"


const ItemDetail = ({ producto}) => {
    const [cantidad, setCantidad] = useState(1)
    const { agregarProducto } = useCarrito()

    const handleOnAdd = (cantidad) => {
        agregarProducto(producto, cantidad)
    }   

    return (
        <div>
            <h1>{producto.title}</h1>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <ItemCount handleOnAdd={handleOnAdd} init={cantidad}/>
        </div>
        
    )
}


    


//     return (
//         <div className='contenedor-detail'>
//             <div className='contenedor-img'>
//                 <img src={producto.foto} alt={producto.titulo}/>
//             </div>
//             <div className='contenedor-info'>
//                 <h2>{producto.titulo}</h2>
//                 <p>{producto.description}</p>
//                 <p>${producto.precio}</p>
//                 <ItemCount init={cantidad} handleOnAdd={handleOnAdd} />
//                 {confirmado && <button onClick={handleClick}>agregar al carrito</button>}
//             </div>
//         </div>
//     );
// }

export default ItemDetail;