import React from 'react';
import { Link } from 'react-router-dom';

function Banoffee(){
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

          <div className='imgDessert6'></div>

          <div className='descriçãoDessert'>
            <h1>Banoffee</h1><br/>
            <p>Delicious English dessert made with cream and banana caramel, combined with a shortbread crumb base,<br/> finished with a touch of cinnamon and whipped cream.</p>
          </div>

        </section>
        <footer className='rodapeDessert'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Banoffee;