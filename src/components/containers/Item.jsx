import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Item = ({prod}) => {
    return(
        <div>
            <Card className="grid__item" key={prod.key} style={{ width: '18rem' }}>
              <Card.Img className="card__img" variant="top" src={prod.imagen} alt={prod.nombre} />
                <Card.Body>
                    <Card.Title>Modelo {prod.nombre}</Card.Title>                
                    <Card.Text>Precio: ${prod.precio}</Card.Text>
                    <Link to={`/producto/${prod.id}`}><Button variant="secondary">Detalle Del Producto</Button></Link> 
                </Card.Body>
            </Card>
        </div>
    )
}