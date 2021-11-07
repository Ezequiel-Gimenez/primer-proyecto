import { Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemCount ({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial);
  const [modificarBoton, setModificarBoton] = useState(false)

  const bajarNumero = () => {
    count > 1 ? setCount (count - 1) : alert("Mínimo 1 unidad")
  };

  const subirNumero = () => {
    count < stock ? setCount (count + 1) : alert("Máximo 10 unidades")
  };

  const OnAdd = () => {
    onAdd(count)
    setCount(initial)
    setModificarBoton(true)
    alert("Se agregó al carrito: " + count + " Item/s")
  }
 
  return (
    <div className="card1">
      <InputGroup className="count">
        <Button variant="outline-secondary" onClick={bajarNumero}>-</Button>
          <InputGroup.Text>{count}</InputGroup.Text>
        <Button variant="outline-secondary" onClick={subirNumero}>+</Button>
      </InputGroup>
      <div className="buttons">
        { 
          modificarBoton 
          ? 
          <Link to={'/cart'}><button className="add">Finalizar Compra</button></Link>
          : 
          <button className="add" onClick={() => onAdd(OnAdd)}>Agregar al carrito</button>
        }
      </div>
    </div>
  );
}