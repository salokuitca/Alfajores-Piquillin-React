import {useContext} from 'react'

import {Store} from "../../store"
import './cart.css'


const LineaCart = ({item}) => {
    const [data, setData] = useContext(Store); 

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
    }
    return (
        <>
         <div className="row border-bottom d-flex align-items-center py-2 mx-1 rounded-lg shadow-sm">
                    <div className="col-3"><img src= {item.imagen} alt= {item.descripcion} className=" img-pdto-encarrito img-fluid"/></div>
                <div className="col-7 d-flex justify-content-around flex-wrap">
                    <div className="col-sm descripcion-pdto-encarrito">{item.nombre}</div>
                    <div className="col-sm">
                        <div className="row d-flex justify-content-around">
                            <div>{item.cantidadUsuario} u</div>
                            <div>$ {item.cantidadUsuario * item.precio}</div>
                        </div>
                    </div>
                </div>
                <div className="col-2"><button className="btn btn-danger btn-sm" 
                onClick={ () => eliminar(item.nombre)}
                >✖</button></div>
                </div>
        </>
    )
}

export default LineaCart;