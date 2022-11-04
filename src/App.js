import React from "react"
import NavBar from "./componentes/NavBar"
import ItemListContainer from "./componentes/ItemListContainer";
import Footer from "./componentes/Footer";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./estilos.css";


function App() {

    return (
        <>
        <BrowserRouter>
            <NavBar/>
            <ItemListContainer />
            <Footer />
            <ToastContainer/>
        </BrowserRouter>
        </>
    )
}

export default App
