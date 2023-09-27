import React from 'react';
import { Link } from 'react-router-dom';

function Salad(){
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

          <div className='imgBurger3'></div>

          <div className='descriçãoBurger'>
            <h1>X-Salad</h1><br/>
            <p>A burger, cheese, tomato, iceberg lettuce, onion, sauce and sesame seed bread.</p>
          </div>

        </section>
        <footer className='rodapeBurger'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Salad;