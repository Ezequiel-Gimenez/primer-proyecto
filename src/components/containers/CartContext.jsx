import { createContext, useState, useContext } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [carList, setCartList] = useState([])

    function agregarAlCarrito(items) {
        setCartList([
            ...carList,
            items
        ])
    }

    const mostrarListado = () => {
        console.log(carList);
    }

    return(
        <CartContext.Provider value= {{
            carList,
            mostrarListado,
            agregarAlCarrito
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider