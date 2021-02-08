import error404 from '../../assets/error404.svg'; 
import './global.css';

const Error404 = () => {
    return (
        <>
        <h1 className="error d-flex justify-content-center">Oh no! No deberías estar aquí...</h1>
        <h5 className="d-flex justify-content-center">Error 404</h5>
        <div className="container d-flex justify-content-center">
        <img src={error404} alt="error 404: Page not found" className="errorImg"/>
        </div>
        </>
    )
}

export default Error404;