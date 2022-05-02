import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    const newObj = {
      ...productToAdd,
      quantity,
    };

    if (isInCart(newObj.id)) {
      cart.map((el) => {
        if (el.id === newObj.id) {
          el.quantity += newObj.quantity;
        }
        console.log(el);
        return el;
      });
    } else {
      setCart([...cart, newObj]);
    }
  };
  const getTotal = () => {
    let total = 0;
    cart.forEach((prod) => {
      total = total + prod.price * prod.quantity;
    });
    return total;
  };

  const getQuantity = () => {
    let count = 0;
    cart.forEach((prod) => {
      count = count + prod.quantity;
    });
    return count;
  };
  const isInCart = (id) => {
    return cart.some((el) => el.id === id);
  };

  const removeItem = (id) => {
    const deleteItem = cart.filter((el) => el.id !== id);
    setCart([...deleteItem]);
  };
  const clear = () => {
    setCart([]);
  };

  return (
    <Provider
      value={{ cart, addItem, removeItem, clear, getTotal, getQuantity }}
    >
      {children}
    </Provider>
  );
};
