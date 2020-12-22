
import NavBar from '../src/components/global/NavBar';
import CartWidget from '../src/components/global/CartWidget';

import Productos from '../src/components/Product/Productos';
import ContenedorDetalles from './components/Product/DetallesProducto/ContenedorDetalles';




function App() {

    return (
    <>
    <NavBar>
      <CartWidget/>
    </NavBar>
    {/* <Productos/> */}
    <ContenedorDetalles/>
   
    </>
  );
}

export default App;
