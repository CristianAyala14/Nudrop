import React from "react";
import { createContext  } from "react";
import { useState } from "react";
export const ecommerce_context = createContext(); //exportar el contex creado



function CartProvider({children}){
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0); //estado para sumar total
    const [countProducts, setCountProducts] = useState(0); // estado contador de productos

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

    //delete
    function Deletefromcart(product){
        const newrestProducts = allProducts.filter((item)=>item.id !==product.id)
        setAllProducts(newrestProducts)
        setTotal(total - product.precio * product.cantidad )
        setCountProducts(countProducts - product.cantidad)
    };


    


    return <ecommerce_context.Provider value={{allProducts,setAllProducts,total,setTotal,countProducts,setCountProducts, addToCart, Deletefromcart}}>{children}</ecommerce_context.Provider>
}
export default CartProvider; //importar la funcion que engloba la logica del contexto