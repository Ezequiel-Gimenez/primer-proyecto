import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getFirestore } from '../services/getFirestore';
import { ItemList } from "./ItemList";

export const ItemListContainer = () =>{
    const [producto, setProduct] = useState ([]);
    const [loading, setLoading] = useState (true);
    const {categoriaId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = categoriaId ? db.collection('items').get().where("categoria", "==", categoriaId) : db.collection('items')

        dbQuery.get()
        .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ...prod.data() } ))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
        
    },[categoriaId])

    return (
        <div className="grid">  
            {loading ? <h1 className="load">Cargando...</h1> : <ItemList producto={producto} />}
        </div>
    ) 
}