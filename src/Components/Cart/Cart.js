import React from 'react'
import { useContext } from 'react'
import { contexto } from '../../Context/CartContext'

export const Cart = () => {
    const { cart , removeItem , clear } = useContext(contexto)

    return (
        <div>
            <h1>Carrito</h1>

            {cart.map(item =>
                <div key={item.item.id}>
                    {item.item.title} x {item.quantity} - ${item.item.price * item.quantity}
                    <button onClick={()=>removeItem(item.item.id)}>borrar</button>
                </div>
            )}
            
            
        </div>
    )
}
