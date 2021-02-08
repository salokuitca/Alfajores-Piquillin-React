import {useState, useContext} from 'react';
// import {useHistory} from 'react-router-dom';
import {Store} from '../../store';

const BotonesCantidad = ({item, id}) => {
    const [data, setData] = useContext(Store);

    const [cantidad, setCantidad] = useState (0);
    // const history = useHistory();

    

    const sumar = () => {
        setCantidad (cantidad + 1);
    }

    const restar = () => {
        if (cantidad > 0) {
        setCantidad (cantidad - 1);
        }
    }
    
    const agregarAlCart = () => {
        
        // AGREGAR ANIMACION PARA QUE SE NOTE QUE SE AGREGO ALGO AL CART
        // item.cantidadUsuario = cantidad;
        
        const nombreComprobar = item.nombre;
        
        
        let verificar = false;
        data.items.forEach ((item) => {
            
            if (nombreComprobar === item.nombre) {
                item.cantidadUsuario = item.cantidadUsuario + cantidad;
                console.log (item.cantidadUsuario)
                setData ({
                    ...data, 
                    cantidadTotal: data.cantidadTotal + cantidad,
                })
                verificar = true;
            }
        })
        if (verificar === false) {
            item.cantidadUsuario = cantidad
            setData ({

                ...data, 
                cantidadTotal: data.cantidadTotal + cantidad,
                items: [...data.items, item],
            })
        }
        
        // history.push("/cart");
        
    }
    return (
        <>
        <div className="btn-toolbar d-flex justify-content-between p-3">
                    <div className="btn-group btn-group-toggle">
                        
                            <button className="btn btn-secondary" onClick={restar}>-</button>

                        
                            <input type="number" className="cantidad-carrito btn btn-secondary" value={cantidad} disabled="disabled"/>
                        
                            <button className="btn btn-secondary" onClick={sumar}
                                disabled = {cantidad+1 > item.stock ? 'disabled' : null}
                            >+</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-group btn-dark" onClick={agregarAlCart} 
                            disabled={cantidad === 0 ? 'disabled' : null}
                        >Agregar al Carrito</button>
                    </div>
                </div>
        </>
    )
}

export default BotonesCantidad;