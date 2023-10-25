import React from 'react'
import "../styles/listadeproductos.css"
import productos from "../mocks/productos_store"
import { useState } from 'react';

function ListaDeProductos({ addToCart }){


  return (
    <div className="products-container">
    {productos.map((producto) => (
        <article key={producto.id} className='product'>
            <img className='product-img' src={producto.imagen} alt="" />
            <div className='name-to-description'>
                <h1 className='product-name'>{producto.nombre}</h1>
                <p className='product-description'>{producto.descripcion}</p>
            </div>
            <div className='price-to-btn'>
                <p>{producto.precio}</p>
                <button className='product-btn' onClick={() => addToCart(producto)}><i className='btn-icon' class="fa-solid fa-cart-plus"></i></button>
            </div>
        </article>
    ))} 
    
    </div>
  )
}

export default ListaDeProductos;
