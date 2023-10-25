import React from 'react'
import "../styles/listadeproductos.css"
import productos from "../mocks/productos_store"
import { useState } from 'react';
import GreenBtn from "../components/green-btn"
function ListaDeProductos({ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts}){
  //add
  function addToCart(product){

    if(allProducts.find((el)=>el.id===product.id)){
      const newallProducts =  allProducts.map((item)=>item.id===product.id?
      {...item, cantidad: item.cantidad + 1} : item )
      setTotal(total+ product.precio * product.cantidad )
      setCountProducts(countProducts + product.cantidad)
      return setAllProducts([...newallProducts]) 
    };

    setTotal(total+ product.precio * product.cantidad )
    setCountProducts(countProducts + product.cantidad)

    if(allProducts.length<6){
      setAllProducts([...allProducts, product])
    }else{
      alert("No podes agregar mas en esta compra.")
    }
  };

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
                <p>${producto.precio}</p>
                <GreenBtn btnContent={<i className='btn-icon' class="fa-solid fa-cart-plus"></i>} onClick={() => addToCart(producto)}/>
            </div>
        </article>
    ))} 
    
    </div>
  )
}

export default ListaDeProductos;



