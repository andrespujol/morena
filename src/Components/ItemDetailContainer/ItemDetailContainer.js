import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';




export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState()
    const [loading, setLoading] =useState(true)

    useEffect(() => {
        (async () => {
            const {data} = await axios.get('https://mocki.io/v1/1c56aa8a-d8a8-4bde-9081-e16b334aa8c8')
            const foundItem = data.find(item=> item.id === +id);
            setItem(foundItem)
            setLoading(false)
        })();
    },[id]);








    // useEffect (() => {
        
    //     const db = firestore ()
    //     const collection = db.collection("Productos")

    //     const query = collection.get()
    //     query.then((resultado)=> {
    //         const resultado_parseado= []
    //         resultado.forEach((documento)=>{
    //             const id =documento.id
    //             const data = documento.data()
    //             const data_final = {id,...data}
    //             resultado_parseado.push(data_final)
    //             console.log(data_final)
    //         })

    //     })
    // })







    if(loading) return <h1>Loading...</h1>
    return (
        <div className="containerDetail">
            <ItemDetail {...item}/>
        </div>
    )
}

