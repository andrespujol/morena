import React, { useEffect, useState} from 'react';
import './ItemListContainer.css'
import { ItemList } from './ItemList/ItemList';



export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const items = async() => {
        const data = await fetch('https://mocki.io/v1/1c56aa8a-d8a8-4bde-9081-e16b334aa8c8')
        const product = await data.json()
        setProducts(product)
    }

    useEffect(()=>{
        setTimeout(()=>{
            items()
        },2000)
    }, [])


    
    return (
        <>
        <div>
            
            <h1>morena</h1>
            <h2>{greeting}</h2>


            
            <ItemList  products={products}/>
        </div>
        </>
    )
}
