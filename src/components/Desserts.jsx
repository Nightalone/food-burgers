import React from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Desserts(){

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
        <ul className='limpar1' id='itens'>
          <Link to='/'><li>Burgers</li></Link>
          <Link to='/drinks'><li>Drinks</li></Link>
          <Link to='/desserts'><li>Desserts</li></Link>
        </ul>
        <div className='container-search limpar2' id='searc'>       
          <input placeholder='Search' type='text' name='text' className='input-search'/>
          <span className="material-symbols-outlined search">search</span>
        </div>      
      </nav>
      <section>
        <div className='container'>
          <Product nome='Banana Split' classN='img13' link='/banana' price='US$ 4.00'/>
          <Product nome='Cake' classN='img14' link='/cake' price='US$ 5.00'/>
          <Product nome='Milk Shake' classN='img15' link='/milk' price='US$ 3.00'/>
        </div>
        <div className='container'>
          <Product nome='Mousse' classN='img16' link='/mousse' price='US$ 2.00'/>
          <Product nome='Ice cream' classN='img17' link='/ice-cream' price='US$ 2.00'/>
          <Product nome='Banoffee' classN='img18' link='/banoffee' price='US$ 3.00'/>
        </div>
      </section>
    </main>
  )
}



export default Desserts;