import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react'; 

function Navbar( { allProducts, setAllproducts, img, op1, op2, op3, op4 }){
    const [Active, setActive] = useState(false);
    const changeActiveState = () => {
        setActive(!Active);
        console.log("active changed")
    };

    return (
        <nav className='nav'>
            <a  href={`/Home`}><img className='nav-img-logo' src={img} alt='Logo'/></a>
            <ul className='nav-list'>
                <li><NavLink className="nav-option" to={`/News`}>{op1}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Media`}>{op2}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Contact`}>{op3}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Store`}>{op4}</NavLink></li>
            </ul>
            <button className='btn-click' onClick={changeActiveState}><i class="fa-solid fa-cart-shopping"></i></button>
            
            
            <div className={`visual-cart ${Active? "" : "hidden"}`}> 
                {allProducts && allProducts.length ? (
                    <>
                    {allProducts.map((producto) => (
                    <article key={producto.id} className='product'>
                        <img className='product-img' src={producto.imagen} alt="" />
                        <div className='name-to-description'>
                            <h1 className='product-name'>{producto.nombre}</h1>
                            <p className='product-description'>{producto.descripcion}</p>
                        </div>
                        <div className='price-to-btn'>
                            <p>{producto.precio}</p>
                            <button className='product-btn'><i className='btn-icon' class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </article>
                    ))} 
                    </>
                ) : (<p>Carrito vacío</p>)
                }               
            </div>
        </nav>
    )
}
export default Navbar;
