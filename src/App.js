import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer'
import {Banner} from './Components/Banner/Banner'
import { Footer } from './Components/Footer/Footer';
import {Cart} from './Components/Cart/Cart'
import { About } from './Components/About/About'
import './App.css'
import { CustomProvider } from './Context/CartContext';


const App = () => 
<>
    <CustomProvider >    
      <BrowserRouter>
        <NavBar/>
        <Banner/>
        <Switch>
            <Route exact path='/'>
                <ItemListContainer greeting="Indumentaria femenina"/>
            </Route>
            <Route exact path='/category/:categoryName'>
              <ItemListContainer />
            </Route>
            <Route exact path='/item/:id'>
              <ItemDetailContainer/>
            </Route>
            <Route exact path='/Cart'>
              <Cart/>
            </Route>
            <Route exact path='/About'>
              <About/>
            </Route>
            <Route exact path='*'>
              <h2>error</h2>
            </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CustomProvider>
</>

export default App;