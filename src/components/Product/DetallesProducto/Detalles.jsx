import "../../../styles/detalles.css";
import BotonesCantidad from "../BotonesCantidad";
import X6 from "../../../assets/x6.jpg";
import X12 from "../../../assets/x12.jpg";
import X24 from "../../../assets/x24.jpg";


const Detalles = ({producto}) => {
    const detalle = producto[0];
    const rutaImg = require (`../../../assets/${detalle.imagen}`);
    console.log (rutaImg)
    console.log (detalle)
    
    return (
        
        <div className="container">
        <div className=" row detalles">
        
            <div className="col-6"><img src={rutaImg.default} alt={detalle.descripcion} className="img-fluid"/></div>
            <div className="col-6">
                <h1>{detalle.nombre}</h1>
                <p className="py-3">{detalle.descripcion}</p>
                <div className="row d-flex justify-content-around py-3">
                <div>Precio: ${detalle.precio}</div>
                <div>Stock: {detalle.stock}</div>
                </div>
                
                <div className="py-5">
                <BotonesCantidad stock={detalle.stock}/>
                </div>
                
            </div>
        </div>

        <div className="container pt-3">
           <h3 className="text-center">Presentaciones disponibles</h3>
           <div className="row d-flex justify-content-between">
                <div className="card" style={{width: "15rem"}}>
                    <img src={X6} class="card-img-top" alt="..."/>
                    <div className="card-body">
                         <p className="card-text">Excelente para quedar bien con alguien que no querés tanto como a tu mamá</p>
                    </div>
                </div>

                <div className="card" style={{width: "15rem"}}>
                    <img src={X12} class="card-img-top" alt="..."/>
                    <div className="card-body">
                         <p className="card-text">Ideal para un cumpleaños, "dia del [...]", o para tenerlos escondidos y no compartirlos con
                        nadie</p>
                    </div>
                </div>

                <div className="card" style={{width: "15rem"}}>
                    <img src={X24} class="card-img-top" alt="..."/>
                    <div className="card-body">
                         <p className="card-text">Si caés con esta caja, garantizamos eterna gratitud del receptor, o te devolvemos tu dinero</p>
                    </div>
                </div>
           </div>
        </div>
        
        </div>

        
    )
}

export default Detalles;