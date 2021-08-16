import React from 'react'
import basket from './basket.svg'
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <a href="/cart"><img src={basket} alt="Carrito de compras" className="basket"/></a>

    )
}

