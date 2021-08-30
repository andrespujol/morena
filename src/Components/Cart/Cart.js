import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from '../../Context/CartContext';
import { getFirestore } from '../../Firebase/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore'
import { Form } from './Form/Form'

import './Cart.css';


export const Cart = () => {
    const { cart , removeItem , clear,  cartTotal } = useContext(contexto);

    const newOrder = () => {

        const db = getFirestore()
        db.collection("Ordenes").doc().set({
            buyer: "Andrés Pujol",
            products: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotal()
            
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }


    if (cart.length > 0 ){
    return (
        <>
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
                <Link to="/Form"><button className="checkoutBuy" onClick={newOrder}>Confirmar compra</button></Link>
                <button className="checkoutClear" onClick={clear}>Vaciar carrito</button>
            </div>
        </div>
                {/* <Form order={newOrder}/> */}
        
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
