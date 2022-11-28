import React from 'react';
import { Routes , Route } from "react-router-dom"
import Carrito from "./Carrito"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Envio from './Envio';

const Main = () => {
    
    return (
        <main>
            <Routes>

                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemDetailContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/Envio" element={<Envio/>}/>
                <Route path='/Carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main