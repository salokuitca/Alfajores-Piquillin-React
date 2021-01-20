const CompraProcesada = ({idCompra}) => {
    return (
        <>
        <div className="checkout">
            Gracias por tu compra!
            Tu compra fue procesada con éxito. Tu código de compra es: {idCompra}
        </div>
        </>
    )
}

export default CompraProcesada;