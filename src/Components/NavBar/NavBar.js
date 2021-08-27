import React from 'react';
import { CartWidget } from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


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
            <NavDropdown title="Productos" className="links" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/Camisas">Camisas</NavDropdown.Item>
              <NavDropdown.Item href="/category/Remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="/category/Blusas">Blusas</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promos</NavDropdown.Item> */}
            </NavDropdown>
            {/* <NavLink to="#blog" className="links">Productos</NavLink> */}
            <NavLink to="/About" className="links">Sobre nosotros</NavLink>
            <NavLink to="#contact-us" className="links">Contacto</NavLink>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>

        </>
    )
}
