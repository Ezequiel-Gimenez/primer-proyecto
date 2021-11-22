import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Button, Container, Modal, FloatingLabel, Form, Col } from "react-bootstrap";
import { getFirestore } from '../services/getFirestore';
import { useState } from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Cart() {

	const {cartList, isInCart, total, clear, removeItem} = useCartContext();

	const [show, setShow] = useState(false)
	const [showOrder, setIdOrder] = useState(false)
    const [orderId, setOrderId] = useState({})
	  
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

	const handleCloseOrder = () => {
        clear()
        setIdOrder(false)
    }

	const handleChange=(e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

	const generarOrden = (e) => {
	
		e.preventDefault()
	
		let order = {}
		order.date = firebase.firestore.Timestamp.fromDate(new Date())
		order.buyer = formData
		order.total = isInCart();
		order.items = cartList.map(cartItem => {
			const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;       

			return {id, nombre, precio}
		})
	
		const dbQuery = getFirestore()
		dbQuery.collection('orders').add(order)
		.then(resp => setOrderId(resp.id))
		.catch(err => console.log(err))
		.finally(()=> {
	
			setFormData({
				name: '',
				phone: '',
				email: ''
			})
		    
			setShow(false)
			setIdOrder(true)  
					
		})
	
		const updateItems = dbQuery.collection('items').where(
			firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
		)
			 
		const batch = dbQuery.batch()
			 
		updateItems.get().then(collection=> {

			collection.docs.forEach(docSnapshot => {
				batch.update(docSnapshot.ref, {
					stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
				})
			})
			    
			batch.commit()
			.catch(err => console.log(err))					
		})
	}

	return (
		<div>
			{isInCart() === 0 ? (
				<div className='carritoVacio'>
					<h1>Carrito Vacio</h1>
					<Button as={Link} to="/" variant="outline-secondary" className="hacerCompra">
						Volver a Productos
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
										<th>Precio Por Unidad</th>
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
						<Button onClick={handleShow} variant="outline-secondary" className="mx-2">
							Finalizar Compra
						</Button>			
					</Container>
				</div>
			)}
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Finalizar Compra</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Ingrese sus datos para finalizar la compra.
				</Modal.Body>
				<Form onSubmit={generarOrden} onChange={handleChange}>
                    <FloatingLabel controlId="name" label="Nombre" className="mb-3">
                        <Form.Control required type="text" name="name" placeholder="Nombre" defaultValue={formData.name} />
                    </FloatingLabel>
                    <FloatingLabel controlId="phone" label="Telefono" className="mb-3">
                        <Form.Control required type="number" name="phone" placeholder="Telefono" defaultValue={formData.phone} />
                    </FloatingLabel>
                    <FloatingLabel controlId="email" label="Email" className="mb-3">
                        <Form.Control required type="email" name="email" placeholder="Email" defaultValue={formData.email} />
                    </FloatingLabel>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>Cerrar</Button>
						<Button type="submit" variant="success">Finalizar Compra</Button>
					</Modal.Footer>
				</Form >
			</Modal>
			<Modal centered show={showOrder} onHide={handleCloseOrder}>
                <Modal.Header closeButton>
                    <Modal.Title>Orden de compra generada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
						Orden De Compra: <h5 className='text-info'>{orderId}</h5>
					</Col>
                    <Col>
						Importe Total: <h4 className='totalCart'>{`${Intl.NumberFormat("es-AR", {currency: "ARS", style: "currency"}).format(total())}`}</h4>
					</Col>
					<h5 className='text-success'>Muchas gracias por su compra!</h5>
                </Modal.Body>
            </Modal>
		</div>
	)
}

export default Cart