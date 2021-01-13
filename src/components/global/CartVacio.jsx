import '../../styles/cart.css';
import {Link} from 'react-router-dom';
import cartEmpty from "../../assets/cartEmpty.png";

const CartVacio = () => {
    return (
        <>
        <div className="container carrito-vacio">
        <div className="d-flex justify-content-center align-items-center"> Oh no! Tu carrito está vacío! </div>
        <div className="d-flex justify-content-center align-items-center">
        <img src={cartEmpty} alt="carrito vacio"/>
        </div>
             <Link to={"/"} className="text-decoration-none d-flex justify-content-center align-items-center">
                <button className="btn btn-lg btn-block btn-warning shadow-sm rounded-pill m-2 col-12 col-md-6 "> Quiero comprar!!!</button>
            </Link>
        </div>  
        </>
    )
}

export default CartVacio;