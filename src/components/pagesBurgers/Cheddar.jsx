import React from 'react';
import { Link } from 'react-router-dom';

function Cheddar(){
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
            <section className='caixaBurgers'>

                <div className='imgBurger5'></div>

                <div className='descriçãoBurger'>
                    <h1>Double Cheddar</h1><br/>
                    <p>Two burgers, sauce, soy sauce onion and dark sesame seed bun.</p>
                </div>

            </section>
            <footer className='rodapeBurger'>
                <h1>PRODUCT INFORMATION</h1>
            </footer>
      </main>
    )
}

export default Cheddar;