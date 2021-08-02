import React from 'react'
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {Banner} from './Components/Banner/Banner'
import { Footer } from './Components/Footer/Footer';




import './App.css'


const App = () => 
<>

    <NavBar />
    <Banner />
    <ItemListContainer greeting="INDUMENTARIA FEMENINA"/>
    <Footer/>
</>

export default App;