function Hero() {

    const saludar = () => {
        alert ('Holaaaaa');
    }

    return (
      <>
      <h1 className="titulo-principal">Probando React! 2</h1>
      <h2 className="subtitulo">Proximamente tienda de alfajorcitos!</h2>
      <button onClick={saludar}>Saludar</button>
      </>
    );
  }
  
  export default Hero;