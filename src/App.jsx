
import NavBar from '../src/components/global/NavBar';
import CartWidget from '../src/components/global/CartWidget';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Productos from '../src/components/Product/Productos';
import ContenedorDetalles from './components/Product/DetallesProducto/ContenedorDetalles';
import Cart from '../src/components/global/Cart';




function App() {

 
  // const sectionToShow = (section) => {
  //   switch (section) {
  //     case 'Home': return <Productos/>;
  //     case 'Detalle': return <ContenedorDetalles/>;
  //     default: return <Productos/>
  //   }
  // }

    return (
    <>
    
    <BrowserRouter>
    <NavBar>
      <CartWidget/>
    </NavBar>
  <Switch>
    <Route exact path="/">
      <Productos />
    </Route>
    <Route path="/detalle/:productoid">
      <ContenedorDetalles />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
    
    <Route path="*">

    </Route>
  </Switch>
  </BrowserRouter>
    {/* {sectionToShow('Detalle')} */}
    {/* <Productos/> */}
    {/* <ContenedorDetalles/> */}
   
    </>
  );
}

export default App;
