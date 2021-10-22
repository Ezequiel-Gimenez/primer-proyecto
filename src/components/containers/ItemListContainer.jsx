import ItemCount from "./ItemCount"

export const ItemListContainer = ({greeting}) => {

    const handleClick = (total) => {
        alert(`Su item se agregó al carrito. Total del carrito: ${total}`)
        console.log(`Su item se agregó al carrito. Total del carrito: ${total}`)
    }

    return (
        <div>
            <p>{greeting}</p>
            <ItemCount stock={8} initial={1} onAdd={handleClick}/>
        </div>
    )
}