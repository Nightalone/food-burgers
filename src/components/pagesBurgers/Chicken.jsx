import React from 'react'
import { Link } from 'react-router-dom'

function Chicken(){
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

                <div className='imgBurger4'></div>

                <div className='descriçãoBurger'>
                    <h1>Chicken</h1><br/>
                    <p>Breaded chicken, mayonnaise, iceberg lettuce and sesame seed bread.</p>
                </div>

            </section>
            <footer className='rodapeBurger'>
                <h1>PRODUCT INFORMATION</h1>
            </footer>
        </main>
    )
}

export default Chicken;