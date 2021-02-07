import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Store} from "../../store";

 import LineaCart from './LineaCart';
 import './cart.css';

function CartWidget({clase}) {
    const history = useHistory();
    const [data, setData] = useContext(Store); //Antes tenia tambien un setData pero me parece que no hace falta VER
    

    const redireccionar = () => {
        history.push("/cart")
        
    }
    return (
        <>
           
        
            <div className={clase}>
            {
                
                data.items.length ?
                <>
                {
                data.items.map(item => 
                <LineaCart
                    key = {item.nombre}
                    item = {item}
                />
                   
                
              
                
               
                    )
                }
                <span onClick={redireccionar} className="text-decoration-none ">
                        <button className="btn btn-lg btn-block btn-light shadow-sm rounded-pill m-2">Ir a Carrito</button>
                     </span>

                </>
                : 
                (<p>No tienes nada en el carrito</p>)

                
                
            }
                    

            </div>
        </>
    )
}

export default CartWidget;