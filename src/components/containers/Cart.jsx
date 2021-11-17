import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Cart() {

	const {cartList, isInCart, total, clear, removeItem} = useCartContext();

	return (
		<div>
			{isInCart() === 0 ? (
				<div className='carritoVacio'>
					<h1>Carrito Vacio</h1>
					<Button as={Link} to="/" variant="outline-secondary" className="hacerCompra">
						Volver a productos
					</Button>
				</div>
			) : (
				<div>
					<Container>
						<h1 className="titulo">Carrito De Compras</h1>
						<table className="table table-bordered table-active text-center">
								<thead>
									<tr className="fs-4 fw-bold">
										<th>Cantidad</th>
										<th>Producto</th>
										<th>Descripcion</th>
										<th>Precio Unitario</th>
										<th>Subtotal</th>
										<th>Eliminar</th>
									</tr>
								</thead>
							<tbody>
								{cartList.map((prod) => (
									<tr key={prod.id}>
										<td>{prod.cantidad}</td>
										<td>{prod.nombre}</td>
										<td>{prod.descripcion}</td>
										<td>
											{Intl.NumberFormat("es-AR", {currency:"ARS", style:"currency",}).format(prod.precio)}
										</td>
										<td>
											{Intl.NumberFormat("es-AR", {currency:"ARS", style:"currency",}).format(prod.cantidad * prod.precio)}
										</td>
										<td onClick={() => removeItem(prod.id)}><FontAwesomeIcon icon={faTrashAlt} /></td>	
									</tr>
								))}
							</tbody>
						</table>
						<h4 className='totalCart'>{`Importe Total ${Intl.NumberFormat("es-AR",
							{currency: "ARS", style: "currency"}).format(total())}`}
						</h4>
						<Button as={Link} to="/" variant="outline-secondary" className="mx-2">
							Seguir Comprando
						</Button>
						<Button onClick={() => {clear()}} variant="outline-secondary" className="mx-2">
							Vaciar Carrito
						</Button>
						<Button onClick={() => {clear()}} as={Link} to="/" variant="outline-secondary" className="mx-2">
							Finalizar Compra
						</Button>			
					</Container>
				</div>
			)}
		</div>
	)
}

export default Cart;

