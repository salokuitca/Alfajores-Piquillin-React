import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Store} from "../../store";

import iconoCarrito from '../../assets/cart.svg';
import logoMenu from '../../assets/logosolo.svg';

import CartWidget from '../Cart/CartWidget';
import './global.css'

const NavBar = () => {
    const [data] = useContext(Store); 
    
    const [show, setShow] = useState(false)
    

  
    const mostrar = () => {
        setShow (!show)
    }
   
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
        <div className="container">
            <span> <Link to={"/"} className="navbar-brand"> 
            
                <img src={logoMenu} alt="Logo con la imagen de un árbol" title="logo-piquillin-menu"
                    className="imagen-menu"/>
                Alfajores Piquillín
            
            </Link>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSuportedContent"
                aria-controls="navbarSuportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSuportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">
                            Productos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Alfajor"} className="nav-link" >Alfajores</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Bombon"} className="nav-link">Bombones</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Chocolate"} className="nav-link">Chocolates</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Pasteleria"}className="nav-link">Pasteleria</Link>
                    </li>
                </ul>
            </div>
            <div className="cart-div">
                <span><img src={iconoCarrito} alt="icono carrito" className="cart" onClick={mostrar}/></span>
                <span className="badge badge-pill badge-dark" >{data.cantidadTotal}</span>
            </div>
        </div>
    </nav>
            <div className="container d-flex justify-content-end">

            
              <CartWidget clase={show}/> 
              </div>
    </>
  );
}

export default NavBar;

