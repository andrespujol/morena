// import React, { useState, useContext } from 'react';
// import { Form } from '../Cart/Form/Form';
// import { contexto } from '../../Context/CartContext';
// import { getFirestore } from '../../Firebase/Firebase';
// import firebase from 'firebase/app';
// import 'firebase/firestore'

// export const OrderContainer = () => {
//     const { cart , removeItem , clear,  cartTotal } = useContext(contexto);
//     const [showForm, setShowForm] = useState(false)
//     const [orderId, setOrderId] = useState("")
//     const [confirmation, setConfirmation] = useState(false)

//     const handleRemove = (i) => {
//         removeItem(i.id)
//     }
    
//     const handleFinalize = () =>{
//         setShowForm(true)
//     }


//     const createOrder = (buyer) =>{

//         const db = getFirestore()
//         const orders = db.collection('Ordenes')

//         const newOrder = {
//             buyer,
//             cart,
//             date: firebase.firestore.Timestamp.fromDate(new Date()),
//             total: cartTotal()
//         }
    
//         orders.add(newOrder).then(({id}) => {
//             setOrderId(id)
//             setConfirmation(true)
            
//         }
//     ).catch((e) => {console.log(e)})

//     const Itemscollection = db.collection("ItemCollection")
//     const batch = getFirestore().batch()

//     cart.forEach( p => {
//         batch.update(Itemscollection.doc(p.id),{stock:p.stock - p.quantity})
//     })
//     batch.commit()
//         .then(()=>{
//                 console.log("Terminó bien")
//                 clear()
//         })
//         .catch(err=>console.log(err))
//     }
//     console.log("Confirmacion",confirmation)
//     console.log("orderId",orderId)

//     return (
//         <div>
//             <Form createOrder={createOrder}/>
//         </div>
//     )
// }
