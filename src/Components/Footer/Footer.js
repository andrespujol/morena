import React from 'react'
import instagram from '../../assets/ig.svg'
import whatsapp from '../../assets/whatsapp.svg'
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="firma">
            <a href="https://www.linkedin.com/in/andrespujol/" target="_blank" rel="noreferrer" className="firmaLink">@by Andrés Pujol</a>
            </div>
            <div className="logos">
                <a href="https://www.instagram.com/tiendamoreok/" target="_blank" rel="noreferrer" className="logosLink"><img src={instagram} alt="Logo instagram"className="instagramFooter" /></a>
                <a href="https://wa.me/541141940037" target="_blank" rel="noreferrer" className="logosLink"><img src={whatsapp} alt="Logo whatsapp" className="whatsappFooter"/></a>
            </div>
        </div>
    )
}



