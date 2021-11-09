import { useState } from 'react';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

    const [count, setCount] = useState(0)
    const [modificarBoton, setModificarBoton] = useState(false)

    console.log(producto);

    const onAdd = (cantidad) => {
        setCount(cantidad)
    }
    console.log(count);

    const OnAdd = () => {
        onAdd(count)
        setCount(1)
        setModificarBoton(true)
    }

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
                    <ItemCount stock={producto.stock} initial={1} /> 
                    <div className="agregar">
                        { 
                            modificarBoton 
                            ? 
                            <Link to={'/cart'}><button className="add">Finalizar Compra</button></Link>
                            : 
                            <button className="add" onClick={OnAdd}>Agregar al carrito</button>
                        }
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default ItemDetail