import React from 'react';
import Home from './Home';
import Cheeseburger from './pagesBurgers/Cheeseburger';
import Bacon from './pagesBurgers/Bacon';
import Salad from './pagesBurgers/Salad';

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
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouters;