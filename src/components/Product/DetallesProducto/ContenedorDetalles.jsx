import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../../db';

import Detalles from "./Detalles";

import "../productos.css";


const ContenedorDetalles = () => {
    const [producto, setProducto] = useState(null);
    
    const {productoid} = useParams ();

    const db = getFirestore (); 

    useEffect(() => {
       
        db.collection('productos').doc(productoid).get()
        .then (doc => {
            if (doc.exists) {
                setProducto(doc.data());
            }
        })
        .catch (e => console.log (e))
    }, [db, productoid])
    
    return (
        
        producto ? (
        <Detalles key={productoid}
        producto={producto}/> ) :
        ( <p className="detalles text-center">Cargando Detalle...</p>)

        
        
    )
}

export default ContenedorDetalles;