import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Item = ({prod}) =>{
    return(
        <div>
            <Card className="grid__item" key={prod.key} style={{ width: '18rem' }}>
              <Card.Img className="card__img" variant="top" src={prod.imagen} alt={prod.nombre} />
                <Card.Body className="card__content">
                    <Card.Title className="card__header">Modelo {prod.nombre}</Card.Title>                
                    <Card.Text>Precio: ${prod.precio}</Card.Text>
                    <Link to={`/producto/${prod.id}`}><Button className="card__btn" variant="primary">Detalle del producto</Button></Link> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item