import { useState, useEffect } from "react";
import { getFetch } from "../services/getFetch";
import Item from "./Item"

const ItemList = () =>{
    const [producto, setProduct] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        getFetch
        .then(res => setProduct(res))             
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    },[])
    console.log(producto);

    return(
        <div className="card2">
            { loading ? <h1>Cargando...</h1> :
                producto.map(prod => <Item key={prod.id} prod={prod} />)
            }
        </div>
    )
}

export default ItemList