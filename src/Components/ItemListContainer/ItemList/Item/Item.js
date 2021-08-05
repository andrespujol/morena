import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'


export const Item = ({ title, description, pictureUrl, price, id, stock}) => {

    return (
        <div className="card">
            <Link to={`Item/${id}`} >
                <h4>{title}</h4>
            </Link>
            <p className="price">Precio: ${price}</p>
            <Link to={`Item/${id}`}><img src={pictureUrl} alt={Item.title} /></Link>

        </div>
    )
}
