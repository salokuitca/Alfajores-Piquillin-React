import iconoCarrito from '../../assets/cart.svg';
import '../../styles/navbar.css';

function CartWidget() {
    return (

            <div className="cart-div">
                <a href=""><img src={iconoCarrito} alt="icono carrito" className="cart"/></a>
                {/* Por el momento aparecera 0 pero luego sera reemplazado por un contador de productos elegidos */}
                <span className="badge badge-pill badge-dark" id="cantidadCarrito">0</span>
            </div>
        
    )
}

export default CartWidget;