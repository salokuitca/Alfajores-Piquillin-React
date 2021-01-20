import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Store} from '../../store';

const BotonesCantidad = ({item, id}) => {
    const [data, setData] = useContext(Store);

    const [cantidad, setCantidad] = useState (0);
    const history = useHistory();

    console.log (data)

    const sumar = () => {
        setCantidad (cantidad + 1);
    }

    const restar = () => {
        if (cantidad > 0) {
        setCantidad (cantidad - 1);
        }
    }
    
    const redireccionar = () => {
        item.cantidadUsuario = cantidad;
        console.log (item.cantidadUsuario);
        const nombreComprobar = item.nombre;
        console.log (nombreComprobar)
        
        let verificar = false;
        data.items.forEach ((item) => {
            console.log ("nombreComprobar" + nombreComprobar, "item.nombre" + item.nombre)
            if (nombreComprobar === item.nombre) {
                item.cantidadUsuario = item.cantidadUsuario + cantidad;
                setData ({
                    ...data, 
                    cantidadTotal: data.cantidadTotal + cantidad,
                })
                verificar = true;
            }
        })
        if (verificar === false) {
            setData ({

                ...data, 
                cantidadTotal: data.cantidadTotal + cantidad,
                items: [...data.items, item],
            })
        }
        
        history.push("/cart");
        console.log("DATA"+data);
    }
    return (
        <>
        <div className="btn-toolbar d-flex justify-content-between p-3">
                    <div className="btn-group btn-group-toggle">
                        
                            <button className="btn btn-secondary" onClick={restar}>-</button>

                        
                            <input type="number" className="cantidad-carrito btn btn-secondary" value={cantidad} disabled="disabled" id="MARROC"/>
                        
                            <button className="btn btn-secondary" onClick={sumar}
                                // disabled = {cantidad+6 > item.stock ? 'disabled' : null}
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