import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import { Banner } from './Components/Banner/Banner';
import { Footer } from './Components/Footer/Footer';
import { Cart } from './Components/Cart/Cart';
import { About } from './Components/About/About';
import { Form } from './Components/Form/Form';
import { Error } from './Components/Error/Error';
import './App.css'
import { CustomProvider } from './Context/CartContext';
import { Contact } from './Components/Contact/Contact';


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
            <Route exact path='/category/:categoryName' component={ItemListContainer} />
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Form' component={Form} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='*' component={Error} ></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </CustomProvider>
</>

export default App;