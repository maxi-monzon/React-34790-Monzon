import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ItemList from "./ItemList"
import {Producto} from "./Producto"
import { productsFetch } from "./ProductFetch"



const ItemListContainer = () => {

    const [items, setItems] = useState([])
   
    useEffect(() => {
        
        productsFetch(Producto)
        .then(res => {
            setItems(res)
        })
        .catch(err => {
            toast.error(err)
        })
    },[])

    return (
        <div>
            <h2>Productos</h2>
            {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )

}

export default ItemListContainer