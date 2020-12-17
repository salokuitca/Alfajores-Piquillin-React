
import NavBar from '../src/components/global/NavBar';
import CartWidget from '../src/components/global/CartWidget';
import ItemListContainer from '../src/components/Product/ItemListContainer';
import CardProducto from '../src/components/Product/CardProducto';
import ImgDdl from '../src/assets/Ddl.jpeg';
import ImgNuez from '../src/assets/Nuez.jpeg';
import ImgMarroc from '../src/assets/marroc.jpg';
import ImgNutella from '../src/assets/nutella.jpg';
import Productos from '../src/components/Product/Productos';




function App() {

    return (
    <>
    <NavBar>
      <CartWidget/>
    </NavBar>
    <Productos/>
    {/* <ItemListContainer>
    <CardProducto imagen={ImgDdl} nombre="Alfajor de Dulce de Leche" descripcion="Mini Alfajor de Dulce de leche (~ 30g) ideal para ese bocadito que necesitas sin sentirte culpable" stock="120" precio="50" />
    <CardProducto imagen={ImgNuez} nombre="Alfajor con nuez" descripcion="Mini Alfajor de Dulce de Leche con nuez mariposa seleccionada" stock="60" precio="60"/>
    <CardProducto imagen={ImgMarroc} nombre="Bombón tipo Marroc" descripcion="Bombon tipo Marroc con dos capas de chocolate con leche y una de mani" stock="30" precio="30"/>
    <CardProducto imagen={ImgNutella} nombre="Bombon de Nutella" descripcion="Exquisito Bombón de chocolate relleno con Nutella" stock="60" precio="35"/>
    </ItemListContainer> */}
   
    </>
  );
}

export default App;
