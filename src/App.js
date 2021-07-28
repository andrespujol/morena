import React from 'react'
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {Banner} from './Components/Banner/Banner'


import 'materialize-css/dist/css/materialize.min.css'
import './App.css'


const App = () => 
<>

    <NavBar />
    <Banner />
    <ItemListContainer/>
</>

export default App;