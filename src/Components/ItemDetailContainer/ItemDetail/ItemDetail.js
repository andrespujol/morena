import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount'


export const ItemDetail = ({id, title, pictureUrl, price, description, stock}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    return (
        <>
        <div className="detail">
            <h3>{title}</h3>
            <div className="detailImg">
            <img src={pictureUrl} alt={title}/> 
            </div>
            
            <h4>${price}</h4>
            <p>{description}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>

        </>
    )
}


