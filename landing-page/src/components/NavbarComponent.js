import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <div>
        <Navbar className='custom-nav-color fixed-top' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">ENIM</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Scolaire</Nav.Link>
            <Nav.Link href="#pricing">Parascolaire</Nav.Link>
            <Nav.Link href="#pricing">Stage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent;
