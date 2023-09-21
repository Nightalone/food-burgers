import React from 'react';
import Burgers from './Burgers';

function App(){
  return(
    <main>
      <nav>
        <h1>Food Burgers</h1>
        <ul>
          <li><a href='./index.html'>Burgers</a></li>
          <li><a href='./drinks.html'>Drinks</a></li>
          <li><a href='./desserts.html'>Desserts</a></li>
        </ul>
      </nav>
      <section>
        <div className='container'>
          <Burgers nome='Cheeseburger' classN='img1'/>
          <Burgers nome='X-Bacon' classN='img2'/>
          <Burgers nome='X-Salad' classN='img3'/>
        </div>
        <div className='container'>
          <Burgers nome='Chicken' classN='img4'/>
          <Burgers nome='Double Cheddar' classN='img5'/>
          <Burgers nome='X-Everything' classN='img6'/>
        </div>
      </section>
    </main>
  )
}

export default App;
