import "../styles/store.css"
import { useState } from "react";
import ListaDeProductos from "../components/listadeproductos";
function Store({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }){

    return (
        <div className="store-container">
            <ListaDeProductos allProducts={allProducts}
            setAllProducts={setAllProducts} countProducts={countProducts} setCountProducts={setCountProducts} total={total} setTotal={setTotal}/>
        </div>
    )
}
export default Store;