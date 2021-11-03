import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getFetch } from '../services/getFetch';
import ItemDetail from './ItemDetail';

const ItemDetailContainter = () =>{

    const [producto, setProduct] = useState ({});
    const [loading, setLoading] = useState (true);
    const {productoId} = useParams()

    useEffect(() => {
        getFetch
        .then(res => {
            setProduct(res.find(prod => prod.id === parseInt(productoId))) 
        })         
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))         
    },[productoId])
    console.log(producto);

    return(
        <div className="card2">
            { 
                loading ? <h1>Cargando...</h1> :
                <ItemDetail producto={producto}/> 
            }
        </div>
    )
}

export default ItemDetailContainter