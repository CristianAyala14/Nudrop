import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/descripcionproducto.css"
import {ecommerce_context} from "../context/cartContext"
import GreenBtn from "../components/green-btn"


function Descripcionproducto() {
    const {addToCart, productosFS} = useContext(ecommerce_context)

    const {id} = useParams();
    const productId = parseInt(id); // Convierte el ID de string a número
    const productodetallado = productosFS.find((el)=> el.id === productId)
    

    return (
        <div className='products-description-view'>
            <div className="product-description-container">
                <div className="product--description-image">
                    <img src={productodetallado.imagen} alt="Imagen del producto"/>
                </div>
                <div className="product-descrpition-details">
                    <div>
                        <h1 className="product-description-name">{productodetallado.nombre}</h1>
                        <p className="product-description-description">{productodetallado.descripcion}</p>
                    </div>
                    <div>
                        <GreenBtn btnContent={<i className="fa-solid fa-cart-plus btn-icon"></i>} onClick={() => addToCart(productodetallado)}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}


export default Descripcionproducto;