import {useState, useEffect} from 'react';
import {getFirestore} from '../../db';

import CardProducto from './CardProducto';
import ItemListContainer from './ItemListContainer';

import './productos.css';

const ProductosDesdeBaseDeDatos = () => {
    const [items, setItems] = useState([]);

    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection('productos').get() //trae toda la coleccion
        .then( docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()}) //el data trae por documento
            })
            
            setItems (arr);
        })
        .catch (e => console.log(e))
    }

    useEffect(() => {
        
        getProductsFromDB();
    }, [])
    
    const filtro = items.filter ((product) => {
        
        return product.data.destacado === true;
    })
    
    return (
        
        <>

        <div className="productos-destacados d-flex justify-content-center">PRODUCTOS DESTACADOS</div>
        <ItemListContainer>
            {
                filtro.length ?

                filtro.map ((item) => {
                    
                    
                    return (<CardProducto key={item.id} 
                    producto = {item.data}
                    id = {item.id}
                    />)
                })
                :
                <p>Cargando Productos...</p>
                
            }

          
        </ItemListContainer>

        
        </>
    )

}

export default ProductosDesdeBaseDeDatos;
