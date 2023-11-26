import React from 'react';
import { Link } from 'react-router-dom';

function Mousse(){
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

          <div className='imgDessert4'></div>

          <div className='descriçãoDessert'>
            <h1 id='titulo'>Mousse</h1><br/>
            <p>Egg, milk chocolate chips, semi-sweet chocolate, cream, sugar.</p>
          </div>

        </section>
        <footer className='rodapeDessert'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Mousse;