import React from 'react'
import basket from './basket.svg'
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <div className="basket">
            <a href="index.html"><img src={basket} alt="Carrito de compras" /></a>
        </div>
    )
}

