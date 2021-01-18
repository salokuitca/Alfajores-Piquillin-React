
import {useState} from 'react';
import NavBar from '../src/components/global/NavBar';
import CartWidget from '../src/components/global/CartWidget';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Productos from '../src/components/Product/Productos';
import ContenedorDetalles from './components/Product/DetallesProducto/ContenedorDetalles';
import Cart from '../src/components/global/Cart';
import {Store} from './store';
import CategoriasContenedor from './components/Categorias/CategoriasContenedor';




function App() {
  const [data, setData] = useState({
    items: [],
    cantidadTotal:0,
  })

    return (
    <>
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Switch>
          <Route exact path="/">
            <Productos />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/:categoria">
            <CategoriasContenedor/>
          </Route>
          <Route path="/detalle/:productoid">
            <ContenedorDetalles />
          </Route>
      
          <Route path="*">

          </Route>
        </Switch>
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}

export default App;
