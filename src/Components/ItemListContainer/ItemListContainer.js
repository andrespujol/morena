import React, { useEffect, useState} from 'react';
import './ItemListContainer.css'
import { ItemList } from './ItemList/ItemList';
import { getFirestore } from '../../Firebase/Firebase';
import { useParams } from 'react-router-dom';





export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(false)
    const { categoryName } =useParams()



    
    useEffect (() => {
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("Productos");
        const filteredCollection = categoryName ? itemCollection.where("categoryId", "==", categoryName ) : itemCollection;
        filteredCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                <h2>No result</h2>
            }
            const filteredItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(filteredItems);
        }, err => {
            console.log(err);
        }).finally(result => {
            setLoading(false);
        });
        
    }, [categoryName]);
    
    if(loading) return <h3>Loading...</h3>
    
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
