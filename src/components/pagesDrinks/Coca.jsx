import React from 'react';
import { Link } from 'react-router-dom';

function Coca(){
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

          <div className='imgJuice4'></div>

          <div className='descriçãoJuice'>
            <h1>Coca Cola</h1><br/>
            <p>Coca-Cola original flavor contains carbonated water, sugar, kola nut extract, caffeine,<br/> IV caramel coloring, phosphoric acid acidifier and natural flavor.</p>
          </div>

        </section>
        <footer className='rodapeJuice'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Coca;