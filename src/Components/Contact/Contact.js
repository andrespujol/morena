import React from 'react';
import map from './map.jpg'
import ig from '../../assets/ig.png'
import whatsapp from '../../assets/whatsapp.png'
import './Contact.css'

export const Contact = () => {
    return (
        <section>
            <h1>contacto</h1>
            <div className="contacto">
                <div className="redes">
                    <div className="redesLogos instagram">
                        <h5>Seguinos en instagram</h5>
                        <a href="https://www.instagram.com/tiendamoreok/" target="_blank" rel="noreferrer"><img src={ig} alt="tiendamoreOk"/></a>
                    </div>
                    <div className="redesLogos whatsapp">
                        <h5>Contactanos por whatsapp</h5>
                        <a href="https://wa.me/541141940037" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp tiendamoreOk"/></a>
                    </div>
                </div>
                <div className="location">
                    <h5>¿Donde se retiran nuestros productos?</h5>
                    <p>Los podes retirar sábados, domingos y feriados, de 10 a 19 hs. en Docks del puerto</p>
                    <img src={map} alt="ubucación del local" />
                </div>
            </div>

        </section>
    )
}
