import React from 'react';
import { Link } from 'react-router-dom';

function Cheeseburger(){
    return(
        <main>
        <nav>
          <h1><span class="material-symbols-outlined">fastfood</span>Food Burgers</h1>
          <ul>
            <Link to='/'><li>Burgers</li></Link>
            <Link to='/drinks'><li>Drinks</li></Link>
            <Link to='/desserts'><li>Desserts</li></Link>
          </ul>
        </nav>
        <section className='caixaBurger'>

          <div className='imgBurger1'></div>

          <div className='descriçãoBurger'>
            <h1>Cheeseburger</h1><br/>
            <p>A burger, cheddar cheese, onion, pickles, ketchup, mustard and sesame-free bread.</p>
          </div>

        </section>
        <footer className='rodapeBurger'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Cheeseburger;