import React from 'react';
import { Link } from 'react-router-dom';

function Milk(){
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

          <div className='imgDessert3'></div>

          <div className='descriçãoDessert'>
            <h1>Milk Shake</h1><br/>
            <p>A delicious dessert, with milk, condensed milk, ice and strawberries.</p>
          </div>

        </section>
        <footer className='rodapeDessert'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Milk;