import React, { useContext } from 'react'
import "../styles/listadeproductos.css"
import productos from "../mocks/productos_store"
import { Link } from 'react-router-dom';
import GreenBtn from "../components/green-btn"
import {ecommerce_context} from "../context/cartContext"




function ListaDeProductos(){
  const {addToCart} = useContext(ecommerce_context)
  
  return (
    <div className="products-container">
    {productos.map((producto) => (
        <article key={producto.id} className='product'>
          <Link to={`/producto/${producto.id}`} key={producto.id} className='product-fromlist'>
            <img className='product-img' src={producto.imagen} alt="" />
          </Link>
          <div className='name-to-description'>
            <h1 className='product-name'>{producto.nombre}</h1>
            <p className='product-description'>{producto.descripcion}</p>
          </div>
          <div className='price-to-btn'>
              <p>${producto.precio}</p>
              <GreenBtn btnContent={<i className="fa-solid fa-cart-plus btn-icon"></i>} onClick={() => addToCart(producto)}/>
          </div>
        </article>      
        
    ))} 
    
    </div>
  )
}

export default ListaDeProductos;



