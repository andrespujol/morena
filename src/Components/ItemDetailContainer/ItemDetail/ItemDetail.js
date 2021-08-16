import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';




export const ItemDetail = ({title, pictureUrl, price, description, stock}) => {
    const [unidades, setUnidades] = useState()
    

    const onAdd = (cantidad) => {
        setUnidades(cantidad)
        console.log(unidades)
        console.log(``)
    }

        if(unidades > 0) {
            return (
                <>
        <article className="detail">
            <h3 className="detailTitle">{title}</h3>
            <div className="detailImg">
                <img src={pictureUrl} alt={title}/> 
            </div>
            <div className="detailBuy">
                <p>Genial!</p>
                <p>{`Agregaste ${unidades} ${title}`} </p>
                <Link to="/Cart"><button className="finalizar">Terminar compra</button></Link>
            </div>

        </article>
            </>
            )
        } else {
            return (
                <>
        <article className="detail">
            <h3 className="detailTitle">{title}</h3>
            <div className="detailImg">
                <img src={pictureUrl} alt={title}/> 
            </div>
            <div className="detailText">
                <h4>${price}</h4>
                <p>{description} </p>
                <ItemCount stock={stock} initial={stock>=1?1:0} onAdd={onAdd} title={title}/>
            </div>

        </article>
        </>
        )
            }
    }