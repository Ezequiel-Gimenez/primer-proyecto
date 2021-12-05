import { Button, Modal, FloatingLabel, Form, Col } from "react-bootstrap";

function CartForm({ handleCloseOrder, handleChange, handleClose, show, showOrder, formData, orderId, generarOrden, total }) {
	return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body> Ingrese sus datos para finalizar la compra. </Modal.Body>
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
                    <Col>Orden De Compra: <h5 className='text-info'>{orderId}</h5></Col>
                    <Col>Importe Total: <h4 className='totalCart'>{`${Intl.NumberFormat("es-AR", {currency: "ARS", style: "currency"}).format(total())}`}</h4></Col>
                    <h5 className='text-success'>Muchas gracias por su compra!</h5>
                </Modal.Body>
            </Modal>
        </div>
	)
}

export default CartForm