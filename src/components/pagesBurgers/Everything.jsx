import React from 'react'
import { Link } from 'react-router-dom'

function Everything(){
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
            <section className='caixaBurger'>

                <div className='imgBurger6'></div>

                <div className='descriçãoBurger'>
                    <h1>X-Everything</h1><br/>
                    <p>A burger, cheese, barbecue sauce, slices of bacon, tomato, iceberg lettuce, onion, sauce and sesame seed bread.</p>
                </div>

            </section>
            <footer className='rodapeBurger'>
                <h1>PRODUCT INFORMATION</h1>
            </footer>
        </main>
    )
}

export default Everything;