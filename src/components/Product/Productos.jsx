import {useState, useEffect} from 'react';
import CardProducto from './CardProducto';
import ItemListContainer from './ItemListContainer';
import {getFirestore} from '../../db';

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
            console.log (arr)
            setItems (arr);
        })
        .catch (e => console.log(e))
    }

    useEffect(() => {
        
        getProductsFromDB();
    }, [])
    return (
        
        <>
        <ItemListContainer>
            {
                items.length ?

                items.map ((item) => {
                    
                    
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
