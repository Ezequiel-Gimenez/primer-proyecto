import { Card, Button } from 'react-bootstrap'

const Item = (props) =>{
    return(
        <div>
            <Card className="grid__item" key={props.id} style={{ width: '18rem' }}>
              <Card.Img className="card__img" variant="top" src={props.imagen} />
                <Card.Body className="card__content">
                    <Card.Title className="card__header">{props.nombre}</Card.Title>
                    <Card.Text className="card__text">{props.descripcion}</Card.Text>
                    <Card.Text>Precio: ${props.precio}</Card.Text>
                    <Button className="card__btn" variant="primary">Detalle del producto</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item