import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react'; 
import GreenBtn from "../components/green-btn"
import Redbtn from './red-btn';


function Navbar( {total,setTotal, countProducts, setCountProducts, allProducts, setAllProducts, img, op1, op2, op3, op4 }){
    const [Active, setActive] = useState(false);
    const changeActiveState = () => {
        setActive(!Active);
    };

    function Deletefromcart(product){
        const newrestProducts = allProducts.filter((item)=>item.id !==product.id)
        setAllProducts(newrestProducts)
        setTotal(total - product.precio * product.cantidad )
        setCountProducts(countProducts - product.cantidad)
    }
  


    return (
        <nav className='nav'>
            <a  href={`/Home`}><img className='nav-img-logo' src={img} alt='Logo'/></a>
            <ul className='nav-list'>
                <li><NavLink className="nav-option" to={`/News`}>{op1}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Media`}>{op2}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Contact`}>{op3}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Store`}>{op4}</NavLink></li>
            </ul>
            <button className='btn-click' onClick={changeActiveState}><i className="fa-solid fa-cart-shopping">{countProducts}</i></button>
            
            
            <div className={`visual-cart ${Active? "" : "hidden"}`}>                              
                {allProducts.length ? (
                    <>
                        <div className="items-added-1">
                            <>
                            {allProducts.map((producto) => (
                                <article className="item-cart">
                                    <div>
                                        <p>{producto.nombre}</p>
                                        <p>{producto.precio}</p>
                                        <p>x{producto.cantidad}</p>
                                    </div>
                                    <div>
                                        <Redbtn onClick={() => Deletefromcart(producto)} btnContent="X"/>
                                    </div>  
                                </article>
                            ))} 
                            </>  
                        </div>
                        <div className="items-added-2">
                            <div className="total-cart">
                                <p>Total:</p>
                                <p>${total}</p>
                            </div>
                            <div className="btn-comprar-container">
                                <GreenBtn btnContent="Comprar"/>
                            </div>
                        </div>
                    </>
                ) : (<p>Carrito vacío.</p>)} 
                                    
            </div>
        </nav>
    )
}

export default Navbar;

            