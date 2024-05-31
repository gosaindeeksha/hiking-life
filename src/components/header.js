import logo from '../logo.svg';
import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <>
    <Navbar bg="transparent" variant="dark" expand="lg" className="navbar fixed-top">
    
      <Navbar.Brand href="#home"><img src={logo} width="170"
             
              className="d-inline-block align-top"
              alt="React Bootstrap logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Class</Nav.Link>
          <Nav.Link href="#link">Promo</Nav.Link>
          <Nav.Link href="#link">Online Class</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
 
  </>
  )
}
