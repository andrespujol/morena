import {  createContext, useState } from 'react';


export const contexto = createContext()

const { Provider } = contexto

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
        setCart([...cart, {...item}])
        }

    const removeItem = (itemId) => {
        const deleteItem = cart.filter((item) => item.item.id !== itemId)
        setCart([...deleteItem]);
    }

    const clear = () => {
        setCart([])
    }


    return (
        <Provider value={{cart, addItem, removeItem, clear, cartTotal,  getTotalQuantity}}>
            {children}
        </Provider>
    )
}