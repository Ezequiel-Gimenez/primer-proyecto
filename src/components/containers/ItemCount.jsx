import React, { useState } from 'react';
import { Card, Button, InputGroup } from 'react-bootstrap'

export default function ItemCount ({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial);
    
  const bajarNumero = () => {
    count > 1 ? setCount (count - 1) : alert("Mínimo 1 unidad")
  };

  const subirNumero = () => {
    count < stock ? setCount (count + 1) : alert("Máximo 8 unidades")
  };
 
  return (
    <div>
      <Card style={{ width: '15rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                  <InputGroup>
                    <Button variant="outline-secondary" onClick={bajarNumero}>-</Button>
                      <InputGroup.Text>{count}</InputGroup.Text>
                    <Button variant="outline-secondary" onClick={subirNumero}>+</Button>
                  </InputGroup>
                    <Button className="mt-2" variant="success" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </Card.Body>
      </Card>
    </div>
  );
}