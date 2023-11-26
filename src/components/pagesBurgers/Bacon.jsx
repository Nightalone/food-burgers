import React from 'react';
import { Link } from 'react-router-dom';

function Bacon(){
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
        <section className='caixaBurgers'>

          <div className='imgBurger2'></div>

          <div className='descriçãoBurger'>
            <h1 id='titulo'>X-Bacon</h1><br/>
            <p>A burger, bacon, iceberg lettuce, onion, cheddar cheese, tomato, mayonnaise, ketchup, mustard and sesame seed bread.</p>
          </div>

        </section>
        <footer className='rodapeBurger'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Bacon;