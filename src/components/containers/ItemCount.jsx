import { Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function ItemCount ({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const bajarNumero = () => {
    count > 1 ? setCount (count - 1) : alert("Mínimo 1 unidad")
  };

  const subirNumero = () => {
    if (stock === 0) {
      alert(`Sin Stock disponible`)
    }
    else if (count >= stock) {
      alert(`Máximo ${stock} unidades`)
    }
    else {setCount(count + 1)}
  }

  return (
    <div className="card1">
      <InputGroup>
        <Button variant="outline-secondary" onClick={bajarNumero}>-</Button>
        <InputGroup.Text>{count}</InputGroup.Text>
        <Button variant="outline-secondary" onClick={subirNumero}>+</Button>
        <button className="add" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </InputGroup>
      <Link to="/"><button className="add">Volver</button></Link>
    </div>
  );
}