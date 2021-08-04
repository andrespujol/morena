import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './ItemDetail/ItemDetail'



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

    if(loading) return <h1>Loading...</h1>
    return (
        <div>
            <ItemDetail {...item}/>
        </div>
    )
}

