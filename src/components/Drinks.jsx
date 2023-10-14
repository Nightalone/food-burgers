import React from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';
import { useState } from 'react'

function Drinks(){

  const  [aparecer, setAparecer] = useState('false')

  function clickMenu(){
    setAparecer(() => {
      if(aparecer === 'false'){
        document.querySelector('#itens').classList.remove('limpar1');
        document.querySelector('#searc').classList.remove('limpar2');
        document.querySelector("#navegar").style.height = '300px'
        document.querySelector("#navegar").style.transition = '1s'
        setAparecer('true')
      }else{
        document.querySelector('#itens').classList.add('limpar1');
        document.querySelector('#searc').classList.add('limpar2');
        document.querySelector("#navegar").style.height = '98px'
        document.querySelector("#navegar").style.transition = '1s'
        setAparecer('false')
      }
    })
  }

  return(
    <main>
      <nav id='navegar'>
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
          <Product nome='Strawberry juice' classN='img7' link='/strawberry' price='US$ 2.00'/>
          <Product nome='Orange juice' classN='img8' link='/orange' price='US$ 2.00'/>
          <Product nome='Pineapple juice' classN='img9' link='/pineapple' price='US$ 2.00'/>
        </div>
        <div className='container'>
          <Product nome='Coca Cola' classN='img10' link='/coca' price='US$ 2.00'/>
          <Product nome='Guarana' classN='img11' link='/guarana' price='US$ 2.00'/>
          <Product nome='Fanta' classN='img12' link='/fanta' price='US$ 2.00'/>
        </div>
      </section>
    </main>
  )
}



export default Drinks;