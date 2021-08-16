import React from 'react'
import instagram from './instagram.png'
import whatsapp from './whatsapp.png'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="firma">
                <p>@by Andrés Pujol</p>
            </div>
            <div className="logos">
                <Link to="https://www.instagram.com/tiendamoreok/" target="example" rel="noopener"><img src={instagram} alt="Logo instagram"className="instagram" /></Link>
                <Link to=""><img src={whatsapp} alt="Logo whatsapp" className="whatsapp"/></Link>
            </div>


        </div>
    )
}



