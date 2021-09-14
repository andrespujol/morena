import React from 'react';
import map from './map.jpg'
import ig from '../../assets/ig.png'
import whatsapp from '../../assets/whatsapp.png'
import './Contact.css'

export const Contact = () => {
    return (
        <section>
            <h1>contacto</h1>
            <div className="redes">
                <div className="redesLogos">
                    <h5>Seguinos en instagram</h5>
                    <img src={ig} alt="Logo instagram" />
                </div>
                <div className="redesLogos">
                    <h5>Contactanos por whatsapp</h5>
                    <img src={whatsapp} alt="Logo whatsapp" />
                </div>
            </div>
            <div className="location">
                <h5>¿Donde se retiran nuestros productos?</h5>
                <p>Los podes retirar sábados, domingos y feriados, de 10 a 19 hs. en Docks del puerto</p>
                <img src={map} alt="ubucación del local" />
            </div>

        </section>
    )
}
