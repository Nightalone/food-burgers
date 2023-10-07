import React from 'react';
import { Link } from 'react-router-dom';

function Banana(){
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

          <div className='imgDessert1'></div>

          <div className='descriçãoDessert'>
            <h1>Banana Split</h1><br/>
            <p>Banana, scoop of chocolate ice cream, cream ice cream ball, scoop of strawberry ice cream, <br/>syrup of your choice, cashew nuts to taste, whipped cream to taste it's 2 cherries.</p>
          </div>

        </section>
        <footer className='rodapeDessert'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Banana;