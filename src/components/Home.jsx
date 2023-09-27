import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

function Home(){
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
      <section>
        <div className='container'>
          <Product nome='Cheeseburger' classN='img1' link='/cheeseburger'/>
          <Product nome='X-Bacon' classN='img2' link='/bacon'/>
          <Product nome='X-Salad' classN='img3' link='/salad'/>
        </div>
        <div className='container'>
          <Product nome='Chicken' classN='img4'/>
          <Product nome='Double Cheddar' classN='img5'/>
          <Product nome='X-Everything' classN='img6'/>
        </div>
      </section>
    </main>
  )
}

export default Home;