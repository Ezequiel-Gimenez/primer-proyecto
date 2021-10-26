import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

export const ItemListContainer = ({greeting}) => {

    const handleClick = (total) => {
        alert(`Su item se agregó al carrito. Total del carrito: ${total}`)
        console.log(`Su item se agregó al carrito. Total del carrito: ${total}`)
    }

    return (
        <div className="grid">
            <p>{greeting}</p>
            <ItemCount stock={8} initial={1} onAdd={handleClick} />
            <ItemList />
        </div>
    ) 
}


