import { useCartContext } from './CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const [modificarBoton, setModificarBoton] = useState(false)
  
    const {cartList, addItem} = useCartContext()
    console.log(cartList);
        
    const OnAdd = (count) => {
        setModificarBoton(true)
        addItem({producto, cantidad: count})
        console.log('Se agregó al carrito:', count, 'Producto/s')
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
                    <div className="agregar">
                        { 
                            modificarBoton 
                            ? 
                            <Link to={'/cart'}><button className="add">Finalizar Compra</button></Link>
                            :
                            <ItemCount stock={producto.stock} initial={1} onAdd={OnAdd}/>
                        }
                    </div>
                    <Link to="/"><button className="add">Volver</button></Link>
                </div>
            </div>
        </div>    
    )
}

export default ItemDetail