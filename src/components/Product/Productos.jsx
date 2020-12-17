import {useState, useEffect} from 'react';
import CardProducto from './CardProducto';
import ItemListContainer from './ItemListContainer';
import ImgDdl from '../../assets/Ddl.jpeg';

const ProductosDesdeBaseDeDatos = () => {
    const [items, setItems] = useState([]);
    

    const productosBaseDeDatos = [
        {
            id: 'D',
            imagen: 'https://dummyimage.com/600x400/000/fff',
            nombre: 'Alfajor de Dulce de Leche',
            precio: 50,
            descripcion: 'Mini Alfajor de Dulce de leche (~ 30g) ideal para ese bocadito que necesitas sin sentirte culpable',
            stock: 120,
        },
        {
            id: 'Z',
            imagen: 'https://dummyimage.com/600x400/000/fff',
            nombre: 'Alfajor con Nuez',
            precio: 60,
            descripcion: 'Mini Alfajor de Dulce de Leche con nuez mariposa seleccionada',
            stock: 60,
        },
        {
            id: 'M',
            imagen: 'https://dummyimage.com/600x400/000/fff',
            nombre: 'Bombón tipo Marroc',
            precio: 30,
            descripcion: 'Bombón tipo Marroc con dos capas de chocolate con leche y una de maní',
            stock: 30,
        },
        {
            id: 'N',
            imagen: 'https://dummyimage.com/600x400/000/fff',
            nombre: 'Bombón con Nutella',
            precio: 35,
            descripcion: 'Exquisito Bombón de chocolate relleno con Nutella',
            stock: 120,
        },
    ]

    const getProductos = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve (productosBaseDeDatos);
        }, 3000)
    })

    useEffect(() => {
        getProductos.then(rta => setItems(rta));
    }, [])
    return (
        <>
        <ItemListContainer>
            {
                items.length ?
                items.map ((item) => (
                    <CardProducto
                    imagen={item.imagen}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    precio={item.precio}
                    stock={item.stock}
                    />
                ))
                :
                <p>Cargandooooo</p>
                
            }
        </ItemListContainer>

        </>
    )
}

export default ProductosDesdeBaseDeDatos;
