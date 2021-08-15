import {React, useState} from "react";
import './ItemCount.css';
import { Modal, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'



const ItemCount = ({ stock , initial , onAdd, title }) => {

    const [contador,setContador] = useState(initial)
    const [show, setShow] = useState(false)
    console.log(title)
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
    
    const mostrarModal = () => {setShow(true)};
    const ocultarModal = () => {setShow(false)}



    return (
        <>
            <div className="botonera">
            <h6 className="cantidadActual btn1">{contador}</h6>
            <button className="boton btn3" onClick={restarContador}>-</button>
            <button className="boton btn4" onClick={mostrarModal}>confirmar</button>
            <button className="boton btn2" onClick={aumentarContador}>+</button>
            </div>
            <Modal show={show}>
                <Modal.Header>
                    Detalle compra:
                </Modal.Header>
                <Modal.Body>
                {`agregaste ${contador} ${title} `}
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={ocultarModal}>Cerrar</Button>
                <Link to="/cartWidget" className="carrito" >Carrito</Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemCount