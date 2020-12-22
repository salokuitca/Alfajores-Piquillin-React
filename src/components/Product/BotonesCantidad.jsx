import {useState} from 'react';

const BotonesCantidad = ({stock}) => {
    const [cantidad, setCantidad] = useState (0);

    const sumar = () => {
        setCantidad (cantidad + 6);
    }

    const restar = () => {
        if (cantidad > 0) {
        setCantidad (cantidad - 6);
        }
    }
    return (
        <>
        <div className="btn-toolbar d-flex justify-content-between p-3">
                    <div className="btn-group btn-group-toggle">
                        
                            <button className="btn btn-secondary" onClick={restar}>-</button>

                        
                            <input type="number" className="cantidad-carrito btn btn-secondary" value={cantidad} disabled="disabled" id="MARROC"/>
                        
                            <button className="btn btn-secondary" onClick={sumar}
                                disabled = {cantidad+6 > stock ? 'disabled' : null}
                            >+</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-group btn-dark" 
                            disabled={cantidad === 0 ? 'disabled' : null}
                        >Agregar al Carrito</button>
                    </div>
                </div>
        </>
    )
}

export default BotonesCantidad;