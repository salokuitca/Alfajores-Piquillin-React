import {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Store} from './store';

import NavBar from '../src/components/global/NavBar';

import ContenedorCardsProductos from './components/Product/ContenedorCardsProductosDestacados';
import ContenedorDetalles from './components/Product/DetallesProducto/ContenedorDetalles';
import Cart from './components/Cart/Cart';
import Checkout from '../src/components/Checkout/Checkout';
import CategoriasContenedor from './components/Categorias/CategoriasContenedor';
import Error404 from './components/global/Error404';
// import Footer from './components/global/Footer';





function App() {
  const [data, setData] = useState({
    items: [],
    cantidadTotal:0,
    
  })

    return (
    <>
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavBar/>
          
        <Switch>
          <Route exact path="/">
            <ContenedorCardsProductos />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
          <Route exact path="/:categoria">
            <CategoriasContenedor/>
          </Route>
          <Route exact path="/detalle/:productoid">
            <ContenedorDetalles />
          </Route>
      
          <Route path="*">
                <Error404/> 
                {/* VER BIEN QUE ME SALTE CUANDO ES UNA RUTA INCORRECTA  */}
          </Route>
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}

export default App;
