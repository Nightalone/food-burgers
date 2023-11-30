import React from 'react';
import { Link } from 'react-router-dom';

function IceCream(){
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

          <div className='imgDessert5'></div>

          <div className='descriçãoDessert'>
            <h1 id='titulo'>Ice cream</h1><br/>
            <p>The classic taste of milk chocolate in its most delicious form! With a creamy texture and incredible flavor,<br/> this ice cream is an irresistible temptation.</p>
          </div>

        </section>
        <footer className='rodapeDessert'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default IceCream;