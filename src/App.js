import React from "react"
import NavBar from "./componentes/NavBar"
import Footer from "./componentes/Footer"
import "./estilos.css";
import ItemCartContainer from "./componentes/ItemCartContainer";


function App() {

    return (
        <>
            <NavBar/>
            <ItemCartContainer />
            <Footer />
        </>
    )
}

export default App