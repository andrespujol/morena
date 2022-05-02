import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from '../../Context/CartContext';
import 'firebase/firestore'

import './Cart.css';

export const Cart = () => {
    const { cart , removeItem , clear, getTotal } = useContext(contexto);

    if (cart.length > 0 ){
        return (
            <>
            <section>
                    <h1>Carrito</h1>
                <div className="cart">
                    {cart.map((item) =>
                    <article className="cartArticle" key={item?.id}>
                        <p>Artículo: {item?.title}</p>
                        <p>Unidades: {item?.quantity}</p>
                        <p className="cartArticleSubtotal">Subtotal: ${item?.price * item?.quantity}</p>
                        <button onClick={()=>removeItem(item?.id)}>borrar</button>
                    </article>
                        
                    )}
                    <article className="checkout">
                        <p>Total: ${getTotal()}</p>
                        <Link to="/Form" className="checkoutLink"><button className="checkoutBuy" >Confirmar compra</button></Link>
                        <button className="checkoutClear" onClick={()=>clear()}>Vaciar carrito</button>
                    </article>
                </div>
            </section>
            </>
    )}else {
        return(
            <div className="empty">    
                <p>No agregaste ningún producto</p>
                <Link className="linkToProducts" to="/">Ir a comprar</Link>
            </div>
        )
    }
}