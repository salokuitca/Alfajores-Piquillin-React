
import {Link} from 'react-router-dom'

import BotonesCantidad from './BotonesCantidad';

import './productos.css';

function CardProducto ({producto, id}) {
  

    return (
    
     <div className="card mb-4 producto">
                <div><img src={producto.imagen} alt={producto.descripcion} title={producto.nombre} className="card-img-top"/>
                    </div>
                <div className="align-items-center card-body "> <strong>{producto.nombre}</strong>
                    <p className= "card-text"> {producto.descripcion}</p>
                    <div className="row d-flex justify-content-around">
                        <div>Stock : {producto.stock}u</div>
                        <div className="precio"> ${producto.precio} </div>
                    </div>
                    <p className="card-text text-right"></p>
                </div>

                <BotonesCantidad item={producto} id={id}/>
                <Link to={`/detalle/${id}`}>Ver más</Link>
                
            </div> 
    
    )
}

export default CardProducto;