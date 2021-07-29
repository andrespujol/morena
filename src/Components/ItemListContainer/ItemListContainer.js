import React from 'react';
import './ItemListContainer.css'
import { ItemList } from './ItemList/ItemList';

export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>morena</h1>
            <h2>{greeting}</h2>
            <ItemList/>
        </div>
    )
}
