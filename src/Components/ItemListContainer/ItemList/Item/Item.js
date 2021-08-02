import React from 'react'
import './Item.css'
import {Link, BrowserRouter} from 'react-router-dom'
import ItemCount from './ItemCount/ItemCount'

export const Item = ({ title, description, pictureUrl, price, id, stock}) => {
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    return (
        <div className="card">
            <BrowserRouter>
                <Link to={`Item/${id}`} >
                    <h4>{title}</h4>
            </Link>
            </BrowserRouter>
            <p className="description">Descripción:{description}</p>
            <p className="price">Precio: ${price}</p>
            <img src={pictureUrl} alt={Item.title} />
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}
