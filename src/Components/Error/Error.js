import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

export const Error = () => {
    return (
        <section className="error">
            <h1>Oops!</h1>
            <h2>No podemos encontrar la página que estábas buscando</h2>
            <Link to="/" className="errorLink"><button>Volver al home</button> </Link>
        </section>
    )
}
