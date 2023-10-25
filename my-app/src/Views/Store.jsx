import "../styles/store.css"
import { useState } from "react";
import ListaDeProductos from "../components/listadeproductos";
function Store({ addToCart, allProducts }){

    return (
        <div className="store-container">
            <ListaDeProductos addToCart={addToCart}/>
        </div>
    )
}
export default Store;