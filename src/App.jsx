
import NavBar from '../src/components/global/NavBar';
import CartWidget from '../src/components/global/CartWidget';
import ItemListContainer from '../src/components/Product/ItemListContainer';
import CardProducto from '../src/components/Product/CardProducto';
import ImgDdl from '../src/assets/Ddl.jpeg';
import ImgNuez from '../src/assets/Nuez.jpeg';
import ImgMarroc from '../src/assets/marroc.jpg';
import ImgNutella from '../src/assets/nutella.jpg';
import {useState} from 'react';



function App() {

    return (
    <>
    <NavBar>
      <CartWidget/>
    </NavBar>

    <ItemListContainer>
    <CardProducto imagen={ImgDdl} nombre="Alfajor de Dulce de Leche" descripcion="Mini Alfajor de Dulce de leche (~ 30g) ideal para ese bocadito que necesitas sin sentirte culpable"/>
    <CardProducto imagen={ImgNuez} nombre="Alfajor con nuez" descripcion="Mini Alfajor de Dulce de Leche con nuez"/>
    <CardProducto imagen={ImgMarroc} nombre="Bombón tipo Marroc" descripcion="Bombon tipo Marroc con dos capas de chocolate con leche y una de mani"/>
    <CardProducto imagen={ImgNutella} nombre="Bombon de Nutella" descripcion="Exquisito Bombón de chocolate relleno con Nutella"/>
    </ItemListContainer>
   
    </>
  );
}

export default App;
