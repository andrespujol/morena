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
    const [buyer, setBuyer] =useState({})

    const handleInputChange = (event)=>{        
        let date = new Date()            
        setBuyer({...buyer, [event.target.name]:event.target.value, fecha: date})
        console.log(buyer)
    }

    const newOrder = () => {
        const db = getFirestore()
        const order = db.collection("Ordenes");
        const newOrder= {
            buyer: buyer,
            products: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cartTotal()
        }
        order.add(newOrder).then(({id}) => {
            setOrderId(id)
        }).catch((error) => {
            if(error) {
                <Modal>
                <ModalHeader>
                    "Error writing document: "
                </ModalHeader>
                <ModalBody>
                    {error}
                </ModalBody>
                <ModalFooter>
                    <Button variant="primary" onClick={handleClose} >Aceptar</Button>
                </ModalFooter>
            </Modal>
            }

        }).finally(() => {
            setloading(false)
        })
    }
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

                <input type="text" placeholder="Nombre" name="name" id="name" onChange={handleInputChange}  />
                <input type="email" placeholder="Email" name="email" id="email" onChange={handleInputChange}  />
                <input type="text" placeholder="Teléfono" name="phone" id="phone" onChange={handleInputChange}   />
                <button className="submitForm" type="submit" onClick={()=>{newOrder(); clear(); handleShow()}} >Comprar</button>
            </form>
            </div>
        </section>
            <Modal show={show} onHide={handleClose}>
                <ModalHeader>
                    Gracias por tu compra!
                </ModalHeader>
                <ModalBody>
                    Tu número de orden es: {orderId}
                </ModalBody>
                <ModalFooter>
                <Link to='/'><Button variant="primary" onClick={handleClose} >Aceptar</Button></Link>
                </ModalFooter>
            </Modal>
        </>
    )
}
