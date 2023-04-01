import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>

    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link><Link to ="/about" style = {{textDecoration:"none", color:"inherit"}}>About</Link></Nav.Link>
            <Nav.Link><Link to ="/pricing" style = {{textDecoration:"none", color:"inherit"}}>Pricing</Link></Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pressure Washing</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Window Washing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}
