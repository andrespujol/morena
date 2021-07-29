import React from 'react'
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {Banner} from './Components/Banner/Banner'




import './App.css'


const App = () => 
<>

    <NavBar />
    <Banner />
    <ItemListContainer greeting="INDUMENTARIA FEMENINA"/>
</>

export default App;