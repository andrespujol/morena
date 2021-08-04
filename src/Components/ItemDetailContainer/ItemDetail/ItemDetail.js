import React from 'react'
import './ItemDetail.css'
import {Footer} from '../../Footer/Footer'


export const ItemDetail = ({id, title, pictureUrl, price, description}) => {
    return (
        <>
        <div className="detail">
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title}/> 
            <h4>${price}</h4>
            <p>{description}</p>

        </div>
        <Footer/>
        </>
    )
}


