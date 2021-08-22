import React, {useState, useContext} from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { contexto } from '../../../Context/CartContext';






export const ItemDetail = (item) => {
    const [unidades, setUnidades] = useState()
    const {addItem} = useContext(contexto)
    
    // const [cart, setCart] = useContext()
    

    const onAdd = (cantidad) => {
        const itemAgregado = {
            item : item ,
            quantity : cantidad
        }
        addItem(itemAgregado)
        setUnidades(cantidad)
    }


    if(unidades > 0) {
        return (
            <>
    <article className="detail">
        <h3 className="detailTitle">{item.title}</h3>
        <div className="detailImg">
            <img src={item.pictureUrl} alt={item.title}/> 
        </div>
        <div className="detailBuy">
            <p>Genial!</p>
            <p>{`Agregaste ${unidades} ${item.title}`} </p>
            <Link to="/Cart"><button className="finalizar">Terminar compra</button></Link>
        </div>
    </article>
        </>
        )
    } else {
        return (
            <>
    <article className="detail">
        <h3 className="detailTitle">{item.title}</h3>
        <div className="detailImg">
            <img src={item.pictureUrl} alt={item.title}/> 
        </div>
        <div className="detailText">
            <h4>${item.price}</h4>
            <p>{item.description} </p>
            <ItemCount stock={item.stock} initial={item.stock>=1?1:0} onAdd={onAdd} title={item.title}/>
        </div>
    </article>
    </>
    )
    }
}