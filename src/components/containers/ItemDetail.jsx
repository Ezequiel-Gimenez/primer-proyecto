import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

    const handleClick = (total) => {
        alert(`Su item se agregó al carrito. Total del carrito: ${total}`)
        console.log(`Su item se agregó al carrito. Total del carrito: ${total}`)
    }

    return (
        <div className="detail">
            <div >
                <img className="images" src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="product">
                <h1>Modelo {producto.nombre}</h1>
                <h2>${producto.precio}</h2>
                <p className="desc">{producto.descripcion}</p>
                <div className="buttons">
                    <ItemCount stock={producto.stock} initial={1} onAdd={handleClick} /> 
                </div>
            </div>
        </div>    
    )
}

export default ItemDetail