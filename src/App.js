import React from "react"
import NavBar from "./componentes/NavBar"
import Footer from "./componentes/Footer";
import Main from "./componentes/Main"
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./estilos.css";


function App() {

    return (
        <>
        <BrowserRouter>
            <NavBar/>
            <Main/>
            <Footer />
            <ToastContainer/>
        </BrowserRouter>
        </>
    )
}

export default App
