import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import basket from './basket.svg'
import { contexto } from '../../../Context/CartContext'
import './CartWidget.css'

export const CartWidget = () => {
    const { getTotalQuantity } = useContext(contexto)

    return (
        <div>
        <Link to="/cart"><img src={basket} alt="Carrito de compras" className="basket"/></Link>
        <span className="cartQuantity">{getTotalQuantity}</span>
        </div>
    )   
}

