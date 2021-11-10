import Item from "./Item";

const ItemList = ({producto}) => {
    return(
        <div className="card2">
            { 
                producto.map(prod => <Item key={prod.id} prod={prod} />)
            }
        </div>
    )
}

export default ItemList