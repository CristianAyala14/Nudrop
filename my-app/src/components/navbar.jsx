import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import {  useContext ,useState} from 'react'; 
import GreenBtn from "../components/green-btn"
import Redbtn from './red-btn';
import {ecommerce_context} from "../context/cartContext"
import {getFirestore, getDocs, collection, addDoc} from "firebase/firestore"



function Navbar( {img, op1, op2, op3, op4 }){
    const {Deletefromcart , total, allProducts, countProducts, sentOrder} = useContext(ecommerce_context)
    
    const [Active, setActive] = useState(false);
    const changeActiveState = () => {
        setActive(!Active);
    };

    

    return (
        <nav className='nav'>
            <a  href={`/`}><img className='nav-img-logo' src={img} alt='Logo'/></a>
            <ul className='nav-list'>
                <li><NavLink className="nav-option" to={`/News`}>{op1}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Media`}>{op2}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Contact`}>{op3}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Store`}>{op4}</NavLink></li>
            </ul>
            <button className='btn-click' onClick={changeActiveState}><i className="fa-solid fa-cart-shopping">{countProducts}</i></button>
            
            {/* carrito visible/novisible */}
            <div className={`visual-cart ${Active? "" : "hidden"}`}>                              
                {allProducts.length ? (
                    <>
                        <div className="items-added-1">
                            <>
                            {allProducts.map((producto) => (
                                <article className="item-cart" key={producto.id}>
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
                                <NavLink className="nav-option" to={`/finalizarcompra`}><GreenBtn btnContent="Comprar" onClick={changeActiveState}/></NavLink>
                            </div>
                        </div>
                    </>
                ) : (<p>Carrito vacío.</p>)} 
                                    
            </div>
        </nav>
    )
}

export default Navbar;

            