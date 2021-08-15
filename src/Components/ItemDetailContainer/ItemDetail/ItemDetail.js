import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount'



export const ItemDetail = ({title, pictureUrl, price, description, stock}) => {
    console.log(stock)
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} ${title}`)
    }
    return (
        <>
        <article className="detail">
            <h3>{title}</h3>
            <div className="detailImg">
            <img src={pictureUrl} alt={title}/> 
            </div>
            
            <h4>${price}</h4>
            <p>{description} </p>
            <ItemCount stock={stock} initial={stock>=1?1:0} onAdd={onAdd} title={title}/>
        </article>

        </>
    )
}


