import logo from './logo.svg';
import './styles/App.css'
import Hero from './components/Home/Hero';
import Footer from './components/global/Footer';
import alfajorDdl from './assets/Dulce de leche.jpeg'

function App() {
  return (
    <>
    <Hero/>
    <img src= {alfajorDdl} alt="alfajor de dulce de leche" />;
    <Footer/>
    </>
  );
}

export default App;
