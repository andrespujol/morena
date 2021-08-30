import {  createContext, useState } from 'react';
import { getFirestore } from '../Firebase/Firebase';

export const contexto = createContext()

const {Consumer,Provider} = contexto

export const CustomProvider = ({children}) => {

    const [cart,setCart] = useState([])

	const cartTotal = () => {
		let total = 0;
		cart.map(item => total += item.item.price * item.quantity);
		return total;
	}
    const getTotalQuantity = () => {
        if (cart.length === 0) {
        }else {
            return cart.length
        }}

    const addItem = (item) => {

        setCart([...cart,item])
        console.log(item)
    }


    const removeItem = (itemId) => {
        const deleteItem = cart.filter((item) => item.item.id !== itemId)
        setCart([...deleteItem]);
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.filter(item => item.item.id === itemId).length === 1
    }
    const buyer = (buyer) =>{
        let venta ={
            buyer: buyer,
            items: cart,
            total: cartTotal
        }
        
        const db = getFirestore()
        db.collection('Ordenes').add({venta})
        
    }  


    
    return (
        <Provider value={{cart, addItem, removeItem, getTotalQuantity, clear, isInCart, cartTotal, buyer}}>
            {children}
        </Provider>
    )
}
