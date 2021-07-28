import React from 'react';
import { CartWidget } from './CartWidget/CartWidget';
import './NavBar.css'
import logo from './logo.png';


export const NavBar = () => {
    return (
        <>
            <nav className="navBar">
                <div class="nav-wrapper menu">
                <a href="index.html" class="brand-logo center menu__logo"><img src={logo} className='logo' alt="logo" /></a>
                <ul id="nav-mobile" class="left hide-on-med-and-down menu__ul">
                    <li class="menu__li"><a href="sass.html">Products</a></li>
                    <li class="menu__li"><a href="badges.html">Sobre nosotros</a></li>
                    <li class="menu__li"><a href="collapsible.html">Contacto</a></li>
                </ul>
                <CartWidget/>
                </div>

            </nav>

        </>
    )
}
