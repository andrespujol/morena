import React from 'react'
import instagram from './instagram.png'
import whatsapp from './whatsapp.png'
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">

            <div className="logos">
                <img src={instagram} alt="Logo instagram"className="instagram" />
                <img src={whatsapp} alt="Logo whatsapp" className="whatsapp"/>
            </div>
            <div className="firma">
                <p>@by Andrés Pujol</p>
            </div>

        </div>
    )
}



