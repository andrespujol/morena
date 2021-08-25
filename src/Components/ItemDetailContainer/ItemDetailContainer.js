import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getFirestore } from '../../Firebase/Firebase';





export const ItemDetailContainer = () => {
    const [ item, setItem ] = useState()
    const { id } = useParams()
    const [loading, setLoading] =useState(true)


    useEffect(() => {
        getFirestore().collection('Products').doc(id).get()
            .then(querySnapshot => {
                setItem({id: id, ...querySnapshot.data()})
                setLoading(false)
            })
            .catch(() => setItem({}))
    }, [id])


    if(loading) return <h1>Loading...</h1>
    return (
        <div className="containerDetail">
            <ItemDetail {...item}/>
        </div>
    )
}



























// export const ItemDetailContainer = () => {
//     const {id} = useParams();
//     const [item, setItem] = useState()
//     const [loading, setLoading] =useState(true)

//     useEffect(() => {
//         (async () => {
//             const {data} = await axios.get('https://mocki.io/v1/1c56aa8a-d8a8-4bde-9081-e16b334aa8c8')
//             const foundItem = data.find(item=> item.id === +id);
//             setItem(foundItem)
//             setLoading(false)
//         })();
//     },[id]);

//     useEffect (() => {

//         const db = getFirestore ()
//         const collection = db.collection("Productos")
//         const query = collection.get()
//         // const filtro = collection.where("categoryId", "==", "Remera" ) 
//         // const query = filtro.get()
//         query.then((resultado)=> {
//             const resultado_parseado= []
//             resultado.forEach((documento)=>{
//                 const id =documento.id
//                 const data = documento.data()
//                 const data_final = {id,...data}
//                 resultado_parseado.push(data_final)
//                 console.log(data_final)
//                 // setProducts(data_final)
//             })
//             setItem(resultado_parseado)
//             console.log(resultado_parseado)
//             setLoading(false)
//         })
//     }, [])




//     if(loading) return <h1>Loading...</h1>
//     return (
//         <div className="containerDetail">
//             <ItemDetail {...item}/>
//         </div>
//     )
// }

