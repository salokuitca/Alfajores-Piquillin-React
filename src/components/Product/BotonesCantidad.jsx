import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const BotonesCantidad = ({stock}) => {
    const [cantidad, setCantidad] = useState (0);
    const history = useHistory();

    const sumar = () => {
        setCantidad (cantidad + 6);
    }

    const restar = () => {
        if (cantidad > 0) {
        setCantidad (cantidad - 6);
        }
    }
    
    const redireccionar = () => {
        history.push("/cart")
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
                        <button type="button" className="btn btn-group btn-dark" onClick={redireccionar} 
                            disabled={cantidad === 0 ? 'disabled' : null}
                        >Agregar al Carrito</button>
                    </div>
                </div>
        </>
    )
}

export default BotonesCantidad;