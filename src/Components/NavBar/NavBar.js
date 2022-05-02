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
          <Navbar.Brand className="div_logo p-0">
              <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav className="menu p-0">
              <NavDropdown title="Productos" className="links " id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to="/category/Camisas" className="menuLinks"> Camisas</Link ></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/category/Remeras" className="menuLinks"> Remeras</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/category/Blusas" className="menuLinks"> Blusas</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/category/Pantalones" className="menuLinks"> Pantalones</Link></NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/About" className="links">Sobre nosotros</NavLink>
              <NavLink to="/Contact" className="links">Contacto</NavLink>
              <CartWidget/>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>

        </>
    )
}
