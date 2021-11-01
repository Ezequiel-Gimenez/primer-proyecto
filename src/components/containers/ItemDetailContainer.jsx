import { useState, useEffect } from "react";
import { getItem } from "../services/getItem";
import ItemDetail from './ItemDetail'

const ItemDetailContainter = () =>{

    const [producto, setProduct] = useState ({});
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        getItem
        .then(res => setProduct(res))             
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    },[])
    console.log(producto);

    return(
        <div className="card2">
            { loading ? <h1>Cargando...</h1> :
                <ItemDetail producto={producto}/> 
            }
        </div>
    )
}

export default ItemDetailContainter