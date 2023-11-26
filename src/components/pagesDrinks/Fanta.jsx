import React from 'react';
import { Link } from 'react-router-dom';

function Fanta(){
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

          <div className='imgJuice6 imgJuice'></div>

          <div className='descriçãoJuice'>
            <h1 id='titulo'>Orange Fanta</h1><br/>
            <p>Carbonated water, sugar, concentrated orange and apple juices, vitamin C, acidity regulators citric acid and sodium citrate,<br/> synthetic flavor identical to natural, sequestrants sodium hexametaphosphate and calcium disodium EDTA.</p>
          </div>

        </section>
        <footer className='rodapeJuice'>
          <h1>PRODUCT INFORMATION</h1>
        </footer>
      </main>
    )
}

export default Fanta;