import {useState, useEffect} from 'react';
import Detalles from "./Detalles";
import "../../../styles/detalles.css";
import {useParams} from 'react-router-dom';


const ContenedorDetalles = () => {
    const [productos, setItems] = useState([]);
    
    const {productoid} = useParams ();
    

    const productosBaseDeDatos = [
        {
            id: 'D',
            imagen: 'Ddl.jpeg',
            nombre: 'Alfajor de Dulce de Leche',
            precio: 50,
            descripcion: 'Mini Alfajor de Dulce de leche (~ 30g) ideal para ese bocadito que necesitas sin sentirte culpable',
            stock: 120,
            cantidadUsuario: 0,
        },
        {
             id: 'Z',
             imagen: 'Nuez.jpeg',
             nombre: 'Alfajor con Nuez',
             precio: 60,
             descripcion: 'Mini Alfajor de Dulce de Leche con nuez mariposa seleccionada',
            stock: 60,
            cantidadUsuario: 0,
         },
         {
             id: 'M',
             imagen: 'marroc.jpg',
             nombre: 'Bombón tipo Marroc',
             precio: 30,
             descripcion: 'Bombón tipo Marroc con dos capas de chocolate con leche y una de maní',
             stock: 30,
             cantidadUsuario: 0,
         },
         {
             id: 'N',
             imagen: 'nutella.jpg',
             nombre: 'Bombón con Nutella',
             precio: 35,
             descripcion: 'Exquisito Bombón de chocolate relleno con Nutella',
            stock: 120,
            cantidadUsuario: 0,
         },
    ]

    const getProductos = data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(data)
            })
        })
    }
    

    useEffect(() => {
        getProductos(productosBaseDeDatos).then(rta => {
            const productoClickeado = rta.filter (producto => producto.id == productoid);
            console.log(productoClickeado)
            setItems(productoClickeado);
        });
    }, [])
    
    return (
        
        productos.length>0 ? (
            <Detalles key={productos.id}
            producto={productos}/>
        ) : (
            <p className="detalles text-center">Cargando Detalle...</p>
        )
        
           

        
        
    )
}

export default ContenedorDetalles;