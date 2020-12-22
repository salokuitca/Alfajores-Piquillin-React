
import NavBar from '../src/components/global/NavBar';
import CartWidget from '../src/components/global/CartWidget';

import Productos from '../src/components/Product/Productos';
import ContenedorDetalles from './components/Product/DetallesProducto/ContenedorDetalles';




function App() {
  const sectionToShow = (section) => {
    switch (section) {
      case 'Home': return <Productos/>;
      case 'Detalle': return <ContenedorDetalles/>;
      default: return <Productos/>
    }
  }

    return (
    <>
    <NavBar>
      <CartWidget/>
    </NavBar>
    {sectionToShow('Detalle')}
    {/* <Productos/> */}
    {/* <ContenedorDetalles/> */}
   
    </>
  );
}

export default App;
