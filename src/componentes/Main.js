import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home';
import Carrito from "./Carrito"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Main = () => {
    
    return (
        <main>
            <Routes>

                <Route path='/Home' element={<Home/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/componentes/item/:id" element={<ItemDetailContainer/>}/>
                <Route path='/componentes/Carrito' element={<Carrito/>}/>
                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main