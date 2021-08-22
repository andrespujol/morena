import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../Context/CartContext'
import './Cart.css'

export const Cart = () => {
    const { cart , removeItem , clear,  cartTotal } = useContext(contexto)

    if (cart.length > 0 ){
    return (
        <div>
            <h1>Carrito</h1>
            {cart.map(item =>
                <article className="cartArticle" key={item.item.id}>
                    <p>Artículo: {item.item.title}</p>
                    <p>Unidades: {item.quantity}</p>
                    <p>Subtotal: ${item.item.price * item.quantity}</p>
                    <button onClick={()=>removeItem(item.item.id)}>borrar</button>
                </article>
                
            )}
            <div className="checkout">
                <p>Total: ${cartTotal()}</p>
                <button className="checkoutBuy" onClick={cartTotal()}>Confirmar compra</button>
                <button className="checkoutClear" onClick={clear}>Vaciar carrito</button>
            </div>
            
            
        </div>
    )}else {
        return(
        <div className="empty">    
        <p>No agregaste ningún producto</p>
        <Link className="linkToProducts" to="/">Ir a comprar</Link>
        </div>
        )
    }
}
