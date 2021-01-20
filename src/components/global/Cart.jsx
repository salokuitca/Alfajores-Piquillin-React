import {useContext} from 'react';
import "../../styles/cart.css";
import CartVacio from './CartVacio';
import {Store} from '../../store';
import {useHistory, Link} from 'react-router-dom';



const Cart = () => {
    const [data, setData] = useContext(Store);
    const history = useHistory();

     const eliminar = (nombre) => {
         
        
         const filtro = data.items.filter ((product) => {
             
             return product.nombre !== nombre
         })

         let actualizarCantidad = 0;
         filtro.forEach ( (item) => {
             actualizarCantidad = actualizarCantidad + item.cantidadUsuario;
         })
         setData ({
         cantidadTotal: actualizarCantidad, 
         items: filtro
         })
         console.log (data)
     }

    const eliminarTodo = () => {
        setData ({
            items: [],
            cantidadTotal:0,
        })
        console.log (data)
    }

    const elegirEnvio = () => {
        
    }

    const redireccionar = () => {
        history.push("/")
    }
    let precioTotal = 0;
    data.items.forEach((item) => {
        precioTotal = precioTotal + (item.cantidadUsuario * item.precio);
    })
    

    return (
        <>
        
        <div className="carrito">
            {data.items.length ? 

            
            <>
            {
                data.items.map(item => 
                <>
                <div className="row border-bottom d-flex align-items-center py-2 mx-1 rounded-lg shadow-sm" >
                    <div className="col-3"><img src= {item.imagen} className=" img-pdto-encarrito img-fluid"/></div>
                <div className="col-7 d-flex justify-content-around flex-wrap">
                    <div className="col-sm descripcion-pdto-encarrito">{item.nombre}</div>
                    <div className="col-sm">
                        <div className="row d-flex justify-content-around">
                            <div>{item.cantidadUsuario} u</div>
                            <div>$ {item.cantidadUsuario * item.precio}</div>
                        </div>
                    </div>
                </div>
                <div class="col-2"><button class="btn btn-danger btn-sm" 
                onClick={ () => eliminar(item.nombre)}
                >✖</button></div>
                </div>
                
                </>
                    )

                
                
            }

        <div className="barra my-3">
            <div className="row border-bottom d-flex align-items-center mx-1 rounded-lg shadow-sm py-3 bg-light">
                <div className="col-7 lugar-de-envio d-flex justify-content-around flex-wrap  ">
                    <div className="pb-1"> Seleccione Lugar de Envío</div>
                    <select name="" id="lugarDeEnvio" onChange={elegirEnvio()} className="rounded" required>
                        
                        <option value="80" id="VGB">Villa Gral Belgrano</option>
                        <option value="50" id="VR">Villa Rumipal</option>
                        <option value="70" id="SRC">Sta Rosa Calamuchita</option>
                        <option value="60" id="VDD">Villa del Dique</option>
                    </select>
                    <div className="invalid-feedback" id="noSeleccionado"></div>
                </div>
                <div className="col-5 text-center">
                    <strong>Total: </strong>
                    <strong>{precioTotal}</strong>
                </div>
            </div>
        </div>

            <div className="row ">
                <div className="col-sm-12  col-md-3 ">
                    <a onClick={redireccionar} class="text-decoration-none ">
                        <button className="btn btn-lg btn-block btn-light shadow-sm rounded-pill m-2">Volver</button>
                     </a>
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