import React from 'react';
import Home from './Home';
import Cheeseburger from './pagesBurgers/Cheeseburger';
import Bacon from './pagesBurgers/Bacon';
import Salad from './pagesBurgers/Salad';
import Chicken from './pagesBurgers/Chicken';
import Cheddar from './pagesBurgers/Cheddar';
import Everything from './pagesBurgers/Everything';
import Drinks from './Drinks';
import Strawberry from './pagesDrinks/Strawberry';
import Orange from './pagesDrinks/Orange';
import Pineapple from './pagesDrinks/Pineapple';
import Coca from './pagesDrinks/Coca';
import Guarana from './pagesDrinks/Guarana';
import Fanta from './pagesDrinks/Fanta'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouters(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={ <Home /> }></Route>
                    <Route path='/cheeseburger' element={ <Cheeseburger /> }></Route>
                    <Route path='/bacon' element={ <Bacon /> }></Route>
                    <Route path='/salad' element={ <Salad /> }></Route>
                    <Route path='/chicken' element={ <Chicken /> }></Route>
                    <Route path='/cheddar' element={ <Cheddar /> }></Route> 
                    <Route path='/everything' element={ <Everything /> }></Route>
                    <Route path='/drinks' element={ <Drinks /> }></Route> 
                    <Route path='/strawberry' element={ <Strawberry /> }></Route> 
                    <Route path='/orange' element={ <Orange /> }></Route>
                    <Route path='/pineapple' element={ <Pineapple /> }></Route>
                    <Route path='/coca' element={ <Coca /> }></Route>
                    <Route path='/guarana' element={ <Guarana /> }></Route>
                    <Route path='/fanta' element={ <Fanta /> }></Route>        
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouters;