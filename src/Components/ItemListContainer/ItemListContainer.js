import React, { useEffect, useState} from 'react';
import './ItemListContainer.css'
import { ItemList } from './ItemList/ItemList';
import { getFirestore } from '../../Firebase/Firebase';





export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true)

    // useEffect(()=>{
    //     const db = getFirestore()
    
    //     const itemCollection = db.collection('Productos')      
    
    //     itemCollection.get().then((query)=>{            
    //         setProducts(query.docs.map(doc => doc.data()));
    //         console.log(query.docs.map(doc => doc.data()))
    //     }).catch((error)=>{
    //         console.log("error de carga de productos")
    //     })
    // },[])



// useEffect(()=>{
//     const db = getFirestore()

//     const itemCollection = db.collection('Productos')      

//     itemCollection.get().then((query)=>{            
//         setProducts(query.docs.map(doc => doc.data()));
//         console.log(query.docs.map(doc => doc.data()))
//     }).catch((error)=>{
//         console.log("error de carga de productos")
//     })
// },[])

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         items()
    //     },2000)
    // }, [])
    
    // const filtro = collection.where("categoryId", "==", "Remera" ) 



















    
    useEffect (() => {

        const db = getFirestore ()
        const collection = db.collection("Productos")
        const query = collection.get()
        // const filtro = collection.where("categoryId", "==", "Remera" ) 
        // const query = filtro.get()
        query.then((resultado)=> {
            const resultado_parseado= []
            resultado.forEach((documento)=>{
                const id =documento.id
                const data = documento.data()
                const data_final = {id,...data}
                resultado_parseado.push(data_final)
                console.log(data_final)
                // setProducts(data_final)
            })
            setProducts(resultado_parseado)
            console.log(resultado_parseado)
        })
    }, [])

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
