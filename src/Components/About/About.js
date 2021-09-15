import React from 'react';
import './About.css'
import img from '../../assets/morena.jpeg'

export const About = () => {
    return (
        <section className="about">
            <h3 className="aboutTitle">Quienes somos</h3>
            <p className="AboutP">Somos una empresa dedicada a la venta de ropa femenina, ofreciendo un servicio de envío rápido y seguro.
                Nuestro objetivo principal es la calidad de experiencia que reciben nuestros clientes, escuchando sus necesidades y estableciendo vínculos a largo plazo.
                Nos ocupamos en ofrecer los mejores precios del mercado manteniendo excelencia en calidad.</p>
            <p className="AboutP aboutStrong">EN MORENA ENCONTRAS DE TODO!</p>
            <p className="AboutP">Es por esto que el 100% de nuestros clientes nos recomiendan.</p>
            <img src={img} alt="morena" className="store"/>
        </section>
    )
}
