import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Store} from "../../store";

 import LineaCart from './LineaCart';
 import './cart.css';
import CartVacio from './CartVacio';

function CartWidget({clase}) {
    
    const history = useHistory();
    const [data] = useContext(Store); 
    

    const redireccionar = () => {
        history.push("/cart")
        
    }

    
    return (
        <>
           
        
            <div className={clase? 'abierto' : 'cerrado'}>
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
                        <button className="btn btn-lg btn-block btn-warning shadow-sm rounded-pill m-2">Ir a Carrito</button>
                     </span>

                </>
                : 
                (<CartVacio/>)

                
                
            }
                    

            </div>
        </>
    )
}

export default CartWidget;