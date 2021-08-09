import React from 'react';
import { CartWidget } from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
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
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
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
            <NavLink to="#blog" className="links">Productos</NavLink>
            <NavLink to="#about-us" className="links">Sobre nosotros</NavLink>
            <NavLink to="#contact-us" className="links">Contacto</NavLink>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>

        </>
    )
}
