import {useState, useEffect} from 'react';
import Detalles from "./Detalles";



const ContenedorDetalles = () => {
    const [items, setItems] = useState([]);
    

    const productosBaseDeDatos = [
        {
            id: 'D',
            imagen: 'Ddl.jpeg',
            nombre: 'Alfajor de Dulce de Leche',
            precio: 50,
            descripcion: 'Mini Alfajor de Dulce de leche (~ 30g) ideal para ese bocadito que necesitas sin sentirte culpable',
            stock: 120,
        },
        // {
        //     id: 'Z',
        //     imagen: 'Nuez.jpeg',
        //     nombre: 'Alfajor con Nuez',
        //     precio: 60,
        //     descripcion: 'Mini Alfajor de Dulce de Leche con nuez mariposa seleccionada',
        //     stock: 60,
        // },
        // {
        //     id: 'M',
        //     imagen: 'marroc.jpg',
        //     nombre: 'Bombón tipo Marroc',
        //     precio: 30,
        //     descripcion: 'Bombón tipo Marroc con dos capas de chocolate con leche y una de maní',
        //     stock: 30,
        // },
        // {
        //     id: 'N',
        //     imagen: 'nutella.jpg',
        //     nombre: 'Bombón con Nutella',
        //     precio: 35,
        //     descripcion: 'Exquisito Bombón de chocolate relleno con Nutella',
        //     stock: 120,
        // },
    ]

    const getProductos = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve (productosBaseDeDatos);
        }, 2000)
    })

    useEffect(() => {
        getProductos.then(rta => setItems(rta));
    }, [])
    return (
        <> 
        {
                items.length ?

                items.map ((item) => {
                    
                    const rutaImg = require (`../../../assets/${item.imagen}`);
                    return (
                        <Detalles nombre={item.nombre}
                        imagen={rutaImg.default}
                        descripcion={item.descripcion}
                        precio={item.precio}
                        stock={item.stock}
                        />
                    )
                })
                :
                <p>Cargando Productos...</p>
                
            }
            
           

        
        </>
    )
}

export default ContenedorDetalles;