import React from 'react'
import './Item.css'
import imagen from './1.jpg'
import ItemCount from './ItemCount/ItemCount'

export const Item = () => {
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    return (
        <div className="card">
            <img src={imagen} alt="producto" />

            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}
