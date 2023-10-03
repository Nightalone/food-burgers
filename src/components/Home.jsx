import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Home(){

  const  [aparecer, setAparecer] = useState('false')

  function clickMenu(){
    setAparecer(() => {
      if(aparecer === 'false'){
        document.querySelector('#itens').classList.remove('limpar1');
        document.querySelector('#searc').classList.remove('limpar2');
        setAparecer('true')
      }else{
        document.querySelector('#itens').classList.add('limpar1');
        document.querySelector('#searc').classList.add('limpar2');
        setAparecer('false')
      }
    })
  }

  return(
    <main>
      <nav>
        <h1><span class="material-symbols-outlined">fastfood</span>Food Burgers</h1>
        <div className='container-menu' id='containe-menu' onClick={clickMenu}><span class="material-symbols-outlined menu">menu</span></div>
        <ul className='limpar' id='itens'>
          <Link to='/'><li>Burgers</li></Link>
          <Link to='/drinks'><li>Drinks</li></Link>
          <Link to='/desserts'><li>Desserts</li></Link>
        </ul>
        <div className='container-search limpar' id='searc'>       
          <input placeholder='Search' type='text' name='text' className='input-search'/>
          <span className="material-symbols-outlined search">search</span>
        </div>      
      </nav>
      <section>
        <div className='container'>
          <Product nome='Cheeseburger' classN='img1' link='/cheeseburger' price='US$ 1.00'/>
          <Product nome='X-Bacon' classN='img2' link='/bacon' price='US$ 2.00'/>
          <Product nome='X-Salad' classN='img3' link='/salad' price='US$ 2.00'/>
        </div>
        <div className='container'>
          <Product nome='Chicken' classN='img4' link='/chicken' price='US$ 2.00'/>
          <Product nome='Double Cheddar' classN='img5' link='/cheddar' price='US$ 3.00'/>
          <Product nome='X-Everything' classN='img6' link='/everything' price='US$ 4.00'/>
        </div>
      </section>
    </main>
  )
}



export default Home;