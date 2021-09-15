import React, {useState, useContext} from 'react';
import './Form.css';
import { contexto } from '../../Context/CartContext';
import { getFirestore } from '../../Firebase/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore'
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export const Form = ()  => {
    const { cart , cartTotal,clear} = useContext(contexto);
    const [orderId, setOrderId] = useState()
    const [loading, setloading] = useState(false)
    const [show, setShow] = useState(false)   
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")



    const saveName =  (e) => {
        const input = e.target
        const valor = input.value
        setName(valor)
    }
    const savePhone =  (e) => {
        const input = e.target
        const valor = input.value
        setPhone(valor)
    }
    const saveEmail =  (e) => {
        const input = e.target
        const valor = input.value
        setEmail(valor)
    }


    const validate = () => {
        if(name.trim().length && phone.trim().length && email.trim().length) {
            return true
        }else{
            return false
        }
    }

    const newOrder = () => {
        if (validate()) {
        const db = getFirestore()
        const order = db.collection("Ordenes");
        const newOrder= {
            buyer: {name, phone, email},
            products: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotal()
        }
        order.add(newOrder).then(({id}) => {
            setOrderId(id)
        }).catch((error) => {
            <h2>{error}</h2>
        }).finally(() => {
            setloading(false)
        })
}}
    const handleClose = () =>setShow(false);
    const handleShow = () =>setShow(true);

    const enviarDatos = (event)=>{
        event.preventDefault();
    }
    
    if(loading) return <h3>Loading...</h3>
    return (
        <>
        <section>
            <h3 className="formTitle">Completa tus datos</h3>
            <div>

            <form  onSubmit={enviarDatos}>

                <input type="text" placeholder="Nombre" name="name" id="name" onChange={saveName}  />
                <input type="email" placeholder="Email" name="email" id="email" onChange={savePhone}  />
                <input type="text" placeholder="Teléfono" name="phone" id="phone" onChange={saveEmail}   />
                <button className="submitForm" type="submit" onClick={()=>{ newOrder(); handleShow()}} >Comprar</button>
            </form>
            </div>

        </section>
        { validate() ?
            <Modal show={show} onHide={handleClose}>
                <ModalHeader>
                    Gracias por tu compra!
                </ModalHeader>
                <ModalBody>
                    Tu número de orden es: {orderId}
                </ModalBody>
                <ModalFooter>
                <Link to='/'><Button variant="primary" onClick={()=>{handleClose() ; clear()}} >Aceptar</Button></Link>
                </ModalFooter>
            </Modal> : 
                    <Modal show={show} onHide={handleClose}>
                    <ModalHeader>
                        Error:
                    </ModalHeader>
                    <ModalBody>
                        Debes ingresar tus datos
                    </ModalBody>
                    <ModalFooter>
                    <Button variant="primary" onClick={handleClose} >Aceptar</Button>
                    </ModalFooter>
                </Modal>}
        </>
    )
}
