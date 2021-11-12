import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getFetch } from "../services/getFetch";
import {ItemList} from "./ItemList";

export const ItemListContainer = () =>{
    const [producto, setProduct] = useState ([]);
    const [loading, setLoading] = useState (true);
    const {categoriaId} = useParams()

    useEffect(() => {
        if (categoriaId) {
            getFetch
            .then(res => {
                setProduct(res.filter(prod => prod.categoria === categoriaId)) 
            })         
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))    
        }else{
            getFetch
            .then(res => {
                setProduct(res) 
            })         
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
        }     
    },[categoriaId])
    console.log(producto);

    return (
        <div className="grid">  
        { 
            loading ? <h1 className="load">Cargando...</h1> :  
            <ItemList producto={producto}/>
        }
        </div>
    ) 
}