import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../db';

import CardProducto from '../Product/CardProducto';
import ItemListContainer from '../Product/ItemListContainer'

import "./categoria.css";


const CategoriasContenedor = () => {
    const [items, setItems] = useState([]);

    const {categoria} = useParams ();

    const db = getFirestore();

    const getProductsFromDb = () => {
        db.collection('productos').get()
        .then (docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push ({id: doc.id, data: doc.data()})
            })
            
            setItems (arr);
        })
        .catch (e => console.log (e));
    }

    useEffect ( () => {
        getProductsFromDb();
        //eslint-disable-next-line
    }, [])
    
    const filtro = items.filter ((product) => {
        
        return product.data.categoria === categoria;
    })
    

    return (
        <>
        <ItemListContainer>
        {
            filtro.length ?
            filtro.map ((item) => {
                return (<CardProducto key={item.id}
                producto ={item.data}
                id = {item.id}>
                </CardProducto>)
            })
            :
            <div className="contenedorCategorias">Cargando...</div>
        }
      
        </ItemListContainer>
        </>
    )
}

export default CategoriasContenedor;