import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addItem(productos) {

        const listaCarrito = [...cartList];

        if (listaCarrito.find((prod) => prod.id === productos.product.id) !== undefined) {  

            listaCarrito.find((prod) => prod.id === productos.product.id).cantidad += productos.cantidad
            setCartList(listaCarrito)   

        }else{
            setCartList([...cartList, {...productos.product, cantidad: productos.cantidad}])
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }

    const clear = () => {
		setCartList([])
	}

    const isInCart = () => {
		return cartList.reduce((prev, next) => prev + next.cantidad, 0)
	}

    const total = () => {
		return cartList.reduce((total, product) => total + (product.cantidad * product.precio), 0)
		}

    return(
        <CartContext.Provider 
            value= {{
                cartList,
                addItem,
                removeItem,
                clear,
                isInCart,
                total
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider