import "../styles/store.css"
import { useState } from "react";
import ListaDeProductos from "../components/listadeproductos";
function Store(){
    //ecommerce
    const [allProducts, setAllproducts] = useState([]) //estado para productos
    const [total, setTotal] = useState(0) //estado para sumar total
    const [countProducts, setCountProducts] = useState(0); // estado contador de productos
    return (
        <div className="store-container">
            <ListaDeProductos/>

        </div>
    )
}
export default Store;