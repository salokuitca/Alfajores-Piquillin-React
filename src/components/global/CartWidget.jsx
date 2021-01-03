import iconoCarrito from '../../assets/cart.svg';
import '../../styles/navbar.css';
import {useHistory} from 'react-router-dom';

function CartWidget() {
    const history = useHistory();

    const redireccionar = () => {
        history.push("/cart")
    }
    return (

            <div className="cart-div">
                <a href="" onClick={redireccionar}><img src={iconoCarrito} alt="icono carrito" className="cart"/></a>
                {/* Por el momento aparecera 0 pero luego sera reemplazado por un contador de productos elegidos */}
                <span className="badge badge-pill badge-dark" id="cantidadCarrito">0</span>
            </div>
        
    )
}

export default CartWidget;