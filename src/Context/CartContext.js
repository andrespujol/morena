import {  createContext, useState } from 'react';
import swal from 'sweetalert';

export const contexto = createContext()

const { Provider } = contexto

export const CustomProvider = ({children}) => {

    const [cart,setCart] = useState([])
    const [isInCart, setIsInCart] = useState(false)

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
    // const isInCart = () => {
    //     cart.find(item => item.item.id === item.id)
    // }

    const addItem = (item) => {
        const inCartList = cart.find((i) => i.id === item.id)
        setIsInCart(true)
        if(inCartList){
            swal({
                title: "Ojo!",
                text: `Ya tenés este producto en el carrito. Ahora tenés ${inCartList.quantity += item.quantity} unidades`,
                icon: "warning",
                button: "Aceptar",
              });
            setCart([...cart])
            }else {
                setCart([...cart, {...item}])
            }
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