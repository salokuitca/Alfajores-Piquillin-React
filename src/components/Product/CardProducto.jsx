
import '../../styles/productos.css';
import BotonesCantidad from './BotonesCantidad';
import {Link} from 'react-router-dom'

function CardProducto ({id, imagen, nombre, descripcion, stock, precio}) {
  

    return (
    
     <div className="card mb-4 producto">
                <div><img src={imagen} alt={descripcion} title={nombre} className="card-img-top"/>
                    </div>
                <div className="align-items-center card-body "> <strong>{nombre}</strong>
                    <p className= "card-text"> {descripcion}</p>
                    <div className="row d-flex justify-content-around">
                        <div>Stock : {stock}u</div>
                        <div className="precio"> ${precio} </div>
                    </div>
                    <p className="card-text text-right"></p>
                </div>

                <BotonesCantidad stock={stock}/>
                <Link to={`/detalle/${id}`}>Ver más</Link>
                
            </div> 
    
    )
}

export default CardProducto;