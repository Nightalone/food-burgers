import React from 'react';
import { Link } from 'react-router-dom';

function Strawberry(){
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
        <section className='caixaJuice'>

          <div className='imgJuice1'></div>

          <div className='descriçãoJuice'>
            <h1>Strawberry juice</h1><br/>
            <p>Strawberry, water, sugar and ice.</p>
          </div>

        </section>
        <footer className='rodapeJuice'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Strawberry;