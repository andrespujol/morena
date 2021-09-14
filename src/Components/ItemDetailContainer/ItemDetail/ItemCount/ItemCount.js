import {React, useState} from "react";
import './ItemCount.css';

const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const restarContador = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }

    return (
        <>
            <div className="botonera">
            <h6 className="cantidadActual btn1">{contador}</h6>
            <button className="boton btn3" onClick={restarContador}>-</button>
            <button className="boton btn4" onClick={confirmar}>confirmar</button>
            <button className="boton btn2" onClick={aumentarContador}>+</button>
            </div>
        </>
    )
}

export default ItemCount