import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [items, setProductos] = useState([])
    const { cat } = useParams()

    useEffect(() => {

        const productos = collection(db, "productos")

        if (cat) {
            const filtro = query(productos, where("categoria", "==", cat))
            const consulta = getDocs(filtro)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setProductos(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {
            const consulta = getDocs(productos)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setProductos(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

        }

    }, [cat])

    return (
        <div>
            {items.length === 0 ? <h1>Cargando Productos.</h1> : <ItemList items={items} />}
        </div>
    )

}

export default ItemListContainer