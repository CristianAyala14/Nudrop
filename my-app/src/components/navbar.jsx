import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import {  useContext ,useState } from 'react'; 
import GreenBtn from "../components/green-btn"
import Redbtn from './red-btn';
import {ecommerce_context} from "../App"



function Navbar( {img, op1, op2, op3, op4 }){
    const context = useContext(ecommerce_context)
    


    const [Active, setActive] = useState(false);
    const changeActiveState = () => {
        setActive(!Active);
    };

    function Deletefromcart(product){
        const newrestProducts = context.allProducts.filter((item)=>item.id !==product.id)
        context.setAllProducts(newrestProducts)
        context.setTotal(context.total - product.precio * product.cantidad )
        context.setCountProducts(context.countProducts - product.cantidad)
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
            <button className='btn-click' onClick={changeActiveState}><i className="fa-solid fa-cart-shopping">{context.countProducts}</i></button>
            
            
            <div className={`visual-cart ${Active? "" : "hidden"}`}>                              
                {context.allProducts.length ? (
                    <>
                        <div className="items-added-1">
                            <>
                            {context.allProducts.map((producto) => (
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
                                <p>${context.total}</p>
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

            