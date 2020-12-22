
import '../../styles/productos.css';
import BotonesCantidad from './BotonesCantidad';

function CardProducto ({imagen, nombre, descripcion, stock, precio}) {
  

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
                
            </div> 
    
    )
}

export default CardProducto;