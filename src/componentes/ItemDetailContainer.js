// import React from "react";
// import ItemDetail from "./ItemDetail";
// import { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// import {db} from './Firebase';
// import { collection, doc, getDoc } from "firebase/firestore"


// const ItemDetailContainer = () => {
    
//     const [productos, setProduct] = useState({})
//     const { id } = useParams()

//     useEffect(()=>{
//         const misProductos = collection(db, "productos")
//         const refe = doc(misProductos,id) 
//         const consulta = getDoc(refe)

//         consulta
//         .then(res=>{
//             setProduct(res.data())
//         })
//         .catch(error=>{
//             console.log(error)
//         })
//     },[])
//     return (
//         <div className='contenedor-detail'>
//         {productos?.length === 0 ? <h1 className='loading'>Cargando...</h1> : <ItemDetail {...productos}/>}
//         </div>
//     );
// }


// export default ItemDetailContainer

import { collection, doc, getDoc } from "firebase/firestore"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()


    useEffect(()=>{
        const productos = collection(db, "productos")
        const refe = doc(productos,id) 
        const consulta = getDoc(refe)

        consulta
        .then(res=>{
            setItem(res.data())
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    return (
        <ItemDetail producto={{id,...item}}/>
    )
}


export default ItemDetailContainer