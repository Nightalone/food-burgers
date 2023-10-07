import React from 'react';
import { Link } from 'react-router-dom';

function Cake(){
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
        <section className='caixaDessert'>

          <div className='imgDessert2'></div>

          <div className='descriçãoDessert'>
            <h1>Cake</h1><br/>
            <p>Fluffy and moist chocolate cake, filled with cream paris (chocolate) and strawberry pieces.</p>
          </div>

        </section>
        <footer className='rodapeDessert'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Cake;