import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getFirestore } from '../services/getFirestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainter = () => {

    const [producto, setProduct] = useState ({});
    const [loading, setLoading] = useState (true);
    const {productoId} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('items').doc(productoId).get()
        dbQuery 
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    },[productoId])
    console.log(producto);

    return(
        <div className="card2">
            { 
                loading ? <h1 className="load2" >Cargando...</h1> :
                <ItemDetail product={producto}/> 
            }
        </div>
    )
}

export default ItemDetailContainter