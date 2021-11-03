import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><img src="./assets/images/logo.png" alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="nav">
                            <NavDropdown title="Productos">
                                <NavDropdown.Item as={Link} to="/">Todos los productos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categoria/grandes">Placas grandes</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categoria/medianas">Placas medianas</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/categoria/molduras">Molduras</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>Cómo Funciona</Nav.Link>
                            <Nav.Link>Contacto</Nav.Link>                          
                            <Nav.Link className="cart"><CartWidget /></Nav.Link> 
                        </Nav>  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


