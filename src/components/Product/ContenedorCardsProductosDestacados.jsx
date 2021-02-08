import {useState, useEffect} from 'react';
import {getFirestore} from '../../db';

import CardProducto from './CardProducto';
import Footer from '../global/Footer'
import ItemListContainer from './ItemListContainer';

import './productos.css';

const ProductosDesdeBaseDeDatos = () => {
    const [items, setItems] = useState([]);

    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection('productos').get() 
        .then( docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()}) 
            })
            
            setItems (arr);
        })
        .catch (e => console.log(e))
    }

    useEffect(() => {
        
        getProductsFromDB();
        //eslint-disable-next-line
    }, [])
    
    const filtro = items.filter ((product) => {
        
        return product.data.destacado === true;
    })

    
    
    return (
        
        <>
        <h1 className="productos-destacados d-flex justify-content-center">PRODUCTOS DESTACADOS</h1>
        {
            filtro.length ?
        <>
        <ItemListContainer>
            {
                
                filtro.map ((item) => {
                    
                    
                    return (<CardProducto key={item.id} 
                    producto = {item.data}
                    id = {item.id}
                    />)
                })
                
                
                
            } 
             
        </ItemListContainer>
        <Footer/>
        </>
            :
            <p className="d-flex justify-content-center">Cargando Productos...</p>
        }
        
        
        </>
    )

}

export default ProductosDesdeBaseDeDatos;
