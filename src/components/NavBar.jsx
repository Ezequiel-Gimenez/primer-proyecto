import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                  <Navbar.Brand href="#home"><img src="./images/logo.png"/></Navbar.Brand>
                    <Nav >
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#features">Cómo Funciona</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

        

    )
}


