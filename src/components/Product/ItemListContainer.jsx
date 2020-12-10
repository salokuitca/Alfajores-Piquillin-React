import '../../styles/productos.css';

const ItemListContainer = ({children}) => {
    return (
        <>
        <div className="container d-flex flex-wrap justify-content-around contenedor-cards">
            {children}
        </div>
        </>
    )
}

export default ItemListContainer;
