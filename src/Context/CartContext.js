
import {  createContext, useState } from 'react';

export const contexto = createContext()

const {Consumer,Provider} = contexto

export const CustomProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addItem = (item) => {

        setCart([...cart,item])
        console.log(item)
    }

    const removeItem = (itemId) => {
        const deleteItem = cart.filter(item => item.id !== itemId)
        setCart(deleteItem);
    }

    const clear = () => {
        setCart([])
        console.log("Clear")
    }

    const isInCart = (itemId) => {
        // const repeatedItem = cart.find( (item) => item.prod_id === itemId);
    }

    const contexto_para_consumir = {cart,addItem,removeItem,clear}
    
    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>
    )
}
