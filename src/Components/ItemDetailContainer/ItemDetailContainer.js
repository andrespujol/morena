import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getFirestore } from '../../Firebase/Firebase';





export const ItemDetailContainer = () => {
    const [ item, setItem ] = useState([])
    const { id } = useParams()
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        setTimeout(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('Productos')      
        itemCollection.get().then((query)=>{                        
            const data = query.docs.map(doc => ({...doc.data(), id: doc.id}))            
            setItem(data)
            setLoading(false)

            
        })
    },1000)
    },[id])

    const ReturnProducts = ({product}) =>{       
        const list = product.map((elemento)=>{                
                    if(elemento.id === id){
                    return <ItemDetail item={elemento}/>
                    }    
                })
                return list;
                
    }

    return loading ? <h1 className="loadingDetail">Loading...</h1> : (
        <div className="containerDetail">            
            <ReturnProducts product= {item}/>
        </div>) 
    
    
    
}