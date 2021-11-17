import { useCartContext } from './CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {

    const [modificarBoton, setModificarBoton] = useState(false)
  
    const {cartList, addItem} = useCartContext()
    console.log(cartList);
        
    const OnAdd = (count) => {
        setModificarBoton(true)
        addItem({product, cantidad: count})
        console.log('Se agregó al carrito:', count, 'Producto/s')
    }

    return (
        <div className="detail" >
            <div >
                <img className="images" src={product.imagen} alt={product.nombre} />
            </div>
            <div className="product">
                <h1>Modelo {product.nombre}</h1>
                <h2>${product.precio}</h2>
                <h4>{product.descripcion}</h4>
                <p className="desc">En stock: {product.stock} unidades</p>
                <div className="buttons">                   
                    <div className="agregar">
                        { 
                            modificarBoton 
                            ? 
                            <Link to={'/cart'}><button className="add">Finalizar Compra</button></Link>
                            :
                            <ItemCount stock={product.stock} initial={1} onAdd={OnAdd}/>
                        }
                    </div>
                    <Link to="/"><button className="add">Volver</button></Link>
                </div>
            </div>
        </div>  
    )
}

export default ItemDetail