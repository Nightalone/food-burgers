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
        document.querySelector("#navegar").style.height = '300px'
        document.querySelector("#navegar").style.transition = '1s'
        setAparecer('true')
      }else{
        document.querySelector('#itens').classList.add('limpar1');
        document.querySelector('#searc').classList.add('limpar2');
        document.querySelector("#navegar").style.height = '140px'
        document.querySelector("#navegar").style.transition = '1s'
        setAparecer('false')
      }
    })
  }

  function pesquisar(){
    var valor = document.querySelector('#produto').value.toLowerCase();
    if(valor === 'cheeseburger'){
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
    }else if(valor === 'x-bacon'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
    }else if(valor === 'x-salad'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
    }else if(valor === 'chicken'){
      document.querySelector('#prot5').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
    }else if(valor === 'double cheddar'){
      document.querySelector('#prot4').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
    }else if(valor === 'x-everything'){
      document.querySelector('#prot4').style.display = 'none';
      document.querySelector('#prot5').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
    }else{
      document.querySelector('#prot1').style.display = 'block';
      document.querySelector('#prot2').style.display = 'block'
      document.querySelector('#prot3').style.display = 'block'
      document.querySelector('#prot4').style.display = 'block'
      document.querySelector('#prot5').style.display = 'block'
      document.querySelector('#prot6').style.display = 'block'
      document.querySelector('#container1').style.display = 'flex';
      document.querySelector('#container2').style.display = 'flex';
    }
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
          <input placeholder='Search' type='text' name='text' className='input-search' id='produto' onKeyUp={pesquisar}/>
          <span className="material-symbols-outlined search">search</span>
        </div>      
      </nav>
      <section>
        <div className='container' id='container1'>
          <div id='prot1'><Product nome='Cheeseburger' classN='img1' link='/cheeseburger' price='US$ 1.00'/></div>
          <div id='prot2'><Product nome='X-Bacon' classN='img2' link='/bacon' price='US$ 2.00'/></div>
          <div id='prot3'><Product nome='X-Salad' classN='img3' link='/salad' price='US$ 2.00'/></div>
        </div>
        <div className='container' id='container2'>
          <div id='prot4'><Product nome='Chicken' classN='img4' link='/chicken' price='US$ 2.00'/></div>
          <div id='prot5'><Product nome='Double Cheddar' classN='img5' link='/cheddar' price='US$ 3.00'/></div>
          <div id='prot6'><Product nome='X-Everything' classN='img6' link='/everything' price='US$ 4.00'/></div>
        </div>
      </section>
    </main>
  )
}



export default Home;