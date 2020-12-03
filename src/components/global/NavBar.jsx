import logoMenu from '../../assets/logosolo.svg';
import '../../styles/navbar.css'
function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
        <div className="container">
            <a href="#" className="navbar-brand">
                <img src={logoMenu} alt="Logo con la imagen de un árbol" title="logo-piquillin-menu"
                    className="imagen-menu"/>
                Alfajores Piquillín
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSuportedContent"
                aria-controls="navbarSuportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSuportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#precios">Precios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pedido">Pedidos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#envios">Envíos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  );
}

export default NavBar;

