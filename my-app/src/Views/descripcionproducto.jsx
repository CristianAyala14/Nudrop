import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../mocks/productos_store';
import "../styles/descripcionproducto.css"

function Descripcionproducto() {
    const {id} = useParams();
    const productId = parseInt(id); // Convierte el ID de string a número

    console.log(id)
    console.log(productos)
    const productodetallado = productos.find((el)=> el.id === productId)
    
    console.log(productodetallado)
    
    
    // if (!productodetallado) {
    //     return <p className='product-id-descripcion'>Producto no encontrado.</p>;
    // }

    return (
        <div className='products-description-view'>
            <div className="product-description-container">
                <div class="product--description-image">
                    <img src={productodetallado.imagen} alt="Imagen del producto"/>
                </div>
                <div class="product-descrpition-details">
                    <h1 className="product-description-name">{productodetallado.nombre}</h1>
                    <p className="product-description-description">{productodetallado.descripcion}</p>
                </div>
            </div>
        </div>
    );
}


export default Descripcionproducto;