import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({logo}) =>{

    const openCart = ()=>{
        
    }

    return(
        <>
            <nav className="navbar">
                <ul className="navBar__list">
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li>Sobre nostros</li>
                    <img src="logo" alt="" />
                    <a href="" onClick={openCart}><FontAwesomeIcon icon={faShoppingCart} /></a>
                </ul>
            </nav>
        </>
    )
}

export {NavBar};