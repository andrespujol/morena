import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer'
import {Banner} from './Components/Banner/Banner'
import { Footer } from './Components/Footer/Footer';




import './App.css'


const App = () => 
<>
<BrowserRouter>
      <NavBar/>
      
      <Switch>
        <Route exact path='/'>
            <Banner/>
            <ItemListContainer/>
            <Footer/>
        </Route>
        <Route exact path='/category/:categoryName'>

          <ItemListContainer />
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer/>
        </Route>
        <Route exact path='*'>
        <h1>error</h1>
        </Route>


      </Switch>
    </BrowserRouter>
</>

export default App;