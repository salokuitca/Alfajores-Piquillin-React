import '../../styles/productos.css';

function CardProducto ({imagen, nombre, descripcion}) {
    return (
    
     <div className="card mb-4 producto">
                <div><img src={imagen} alt={descripcion} title={nombre} className="card-img-top"/>
                    </div>
                <div className="align-items-center card-body "> <strong>{nombre}</strong>
                    <p className= "card-text"> {descripcion}</p>
                </div>
                <div className="btn-toolbar d-flex justify-content-between p-3">
                    <div className="btn-group btn-group-toggle">
                        <label className="btn btn-light">
                            <input  className="btn btn-light" type="radio"/>-
                        </label>
                        <label className="btn btn-light">
                            <input type="number" class="cantidad-carrito" id="MARROC"/>
                        </label>
                        <label className="btn btn-light">
                            <input type="radio"/>+
                        </label>
                    </div>
                    <div>
                        <button onclick="anotarCompra()" type="button" className="btn btn-group btn-dark" >Agregar al Carrito</button>
                    </div>
                </div>
            </div> 
    
    )
}

export default CardProducto;