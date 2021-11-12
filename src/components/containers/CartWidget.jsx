import { useCartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {

    const { isInCart } = useCartContext()

    if (isInCart()!==0){
        return (
            <div>
                <FontAwesomeIcon icon={faShoppingCart} />{` ` + isInCart()}
            </div>
        );
    }

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    )
}