import {useContext, useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {Store} from '../../store';

import CartVacio from './CartVacio';
import LineaCart from './LineaCart'

import "./cart.css";

const Cart = () => {
    
    const [data, setData] = useContext(Store);
    const history = useHistory();
    const [envio, setEnvio] = useState(80);


    const eliminarTodo = () => {
        setData ({
            items: [],
            cantidadTotal:0,
        })
        
    }

    const elegirEnvio = (e) => {
        setEnvio(e.target.value)          
    }
    
    const redireccionar = () => {
        history.push("/")
    }

    const sumTotal = (cart, envio) => {
        let total = cart.reduce((t, product) => t += (product.precio * product.cantidadUsuario), 0).toFixed(2);
        return Number(total) + Number(envio)
    }

    useEffect(() => {
        setData ({
            ...data, 
            envio: envio,
            precioTotal:sumTotal(data.items, envio),
        })
        //eslint-disable-next-line
    },[data.items, envio])

    

    return (
        <>
        
            <div className="container carrito">
            {data.items.length ? 

            
            <>
            {
                data.items.map(item => 
                    <LineaCart
                    key = {item.nombre}
                    item = {item}
                />
                    )

                
                
            }

                <div className="barra my-3">
                    <div className="row border-bottom d-flex align-items-center mx-1 rounded-lg shadow-sm py-3 bg-light">
                        <div className="col-7 lugar-de-envio d-flex justify-content-around flex-wrap  ">
                            <div className="pb-1"> Seleccione Lugar de Envío</div>
                            <select onChange={elegirEnvio} className="rounded" required>
                                
                                <option value="80" id="VGB">Villa Gral Belgrano ($80)</option>
                                <option value="50" id="VR">Villa Rumipal ($50)</option>
                                <option value="70" id="SRC">Sta Rosa Calamuchita ($70)</option>
                                <option value="60" id="VDD">Villa del Dique ($60)</option>
                            </select>
                            <div className="invalid-feedback"></div>
                        </div>
                        <div className="col-5 text-center">
                            <strong>Total: </strong>
                            <strong>{sumTotal(data.items, envio)}</strong>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-sm-12  col-md-3 ">
                        <span onClick={redireccionar} className="text-decoration-none ">
                            <button className="btn btn-lg btn-block btn-light shadow-sm rounded-pill m-2">Volver</button>
                        </span>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <button onClick={eliminarTodo} className="btn btn-lg btn-block btn-light shadow-sm rounded-pill m-2">Eliminar</button>
                    </div>
                    <div className="col-sm-12 col-md-6 text-right">
                        <Link to={"/checkout"}><button className="btn btn-lg btn-block btn-warning text-uppercase shadow-sm rounded-pill pagar m-2"
                        data-toggle="modal" data-target="#staticBackdrop">comprar</button></Link>
                    </div>
                </div>
            
        </>

            : 
                <>
                    <CartVacio/>
                </>
        }
        
    </div>    
  
    </>
    )
}

export default Cart;