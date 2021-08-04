import React from 'react';
import { CartWidget } from './CartWidget/CartWidget';
import './NavBar.css'
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap';


export const NavBar = () => {
    
    return (

        <>
    <div className="App">
      <Navbar bg="white" variant="dark"
        sticky="top" expand="sm" collapseOnSelect className="navBarMenu">
        <Navbar.Brand className="div_logo">
            <a href="./index.html"><img src={logo} alt="logo" className="logo" /></a>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="menu">
            {/* <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#blog" className="links">Productos</Nav.Link>
            <Nav.Link href="#about-us" className="links">Sobre nosotros</Nav.Link>
            <Nav.Link href="#contact-us" className="links">Contacto</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>

        </>
    )
}
