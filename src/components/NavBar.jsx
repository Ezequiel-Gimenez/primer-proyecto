import React from 'react'
import { CartWidget } from './CartWidget'
import { Container, Navbar, Nav } from 'react-bootstrap'

export const NavBar = () => {
    return (
        <div>  
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <Navbar.Brand href="/"><img src="./assets/images/logo.png" alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="nav">
                            <Nav.Link href="/">Productos</Nav.Link>
                            <Nav.Link href="/">Cómo Funciona</Nav.Link>
                            <Nav.Link href="/">Contacto</Nav.Link> 
                            <Nav.Link className="cart" href="/"><CartWidget /></Nav.Link> 
                        </Nav>  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


