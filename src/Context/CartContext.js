
import {  createContext, useState } from 'react';

export const contexto = createContext()

const {Consumer,Provider} = contexto

export const CustomProvider = ({children}) => {

    const [cart,setCart] = useState([])

	const cartTotal = () => {
		let total = 0;
		cart.map(item => total += item.item.price * item.quantity);
		return total;
	}


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
    const empty = () =>{
        setCart([])
    }
    const isInCart = (itemId) => {
        // const repeatedItem = cart.find( (item) => item.prod_id === itemId);
    }

    
    return (
        <Provider value={{cart, addItem, removeItem, clear, isInCart,empty, cartTotal}}>
            {children}
        </Provider>
    )
}
