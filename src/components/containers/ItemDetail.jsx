import { useState } from 'react';
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

    const [count, setCount] = useState(0)

    console.log(producto);

    const onAdd = (cantidad) => {
        setCount(cantidad)
    }
    console.log(count);

    return (
        <div className="detail">
            <div>
                <img className="images" src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="product">
                <h1>Modelo {producto.nombre}</h1>
                <h2>${producto.precio}</h2>
                <h4>{producto.descripcion}</h4>
                <p className="desc">En stock: {producto.stock} unidades</p>
                <div className="buttons">
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} /> 
                </div>
            </div>
        </div>    
    )
}

export default ItemDetail