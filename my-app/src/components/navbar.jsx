import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar(props){
    return (
        <nav className='nav'>
            <a  href={`/Home`}><img className='nav-img-logo' src={props.img} alt='Logo'/></a>
            <ul className='nav-list'>
                <li><NavLink className="nav-option" to={`/News`}>{props.op1}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Media`}>{props.op2}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Contact`}>{props.op3}</NavLink></li>
                <li><NavLink className="nav-option" to={`/Store`}>{props.op4}</NavLink></li>
            </ul>
            <button className='btn-click'><a  href={`/Cart`}><i class="fa-solid fa-cart-shopping"></i></a></button>
        </nav>
    )
}
export default Navbar;
