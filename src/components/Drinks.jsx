import React, { useState, useEffect } from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';


function Drinks(){

  const  [aparecer, setAparecer] = useState(false)
 
  function clickMenu(){
    if(aparecer == false){
      document.querySelector('#itens').classList.remove('limpar1');
      document.querySelector('#searc').classList.remove('limpar2');
      setAparecer(true)
    }else{
      document.querySelector('#itens').classList.add('limpar1');
      document.querySelector('#searc').classList.add('limpar2');
      setAparecer(false)
    }
  }

  function pesquisar(){
    let valor = document.querySelector('#produto').value.toLowerCase();
    if(valor === 'strawberry juice'){
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'orange juice'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'pineapple juice'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'coca cola'){
      document.querySelector('#prot5').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'guarana'){
      document.querySelector('#prot4').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'fanta'){
      document.querySelector('#prot4').style.display = 'none';
      document.querySelector('#prot5').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else{
      document.querySelector('#prot1').style.display = 'block';
      document.querySelector('#prot2').style.display = 'block';
      document.querySelector('#prot3').style.display = 'block';
      document.querySelector('#prot4').style.display = 'block';
      document.querySelector('#prot5').style.display = 'block';
      document.querySelector('#prot6').style.display = 'block';
      document.querySelector('#container1').style.display = 'flex';
      document.querySelector('#container2').style.display = 'flex';
      document.querySelector('nav').classList.remove('nav-small');
      document.querySelector('nav').classList.add('nav-mid');
      document.querySelector('section').classList.add('sec1');
      document.querySelector('section').classList.remove('sec2');
      
    }
  }

  const [count, setCount] = useState(0)

  useEffect(() => {
    if(localStorage.getItem('num') == undefined){
      setCount(0)
    }else{
      setCount(parseInt(localStorage.getItem('num')))
    }

    if(localStorage.getItem('valorStrawberry') == undefined){
      setValorStrawberry(0)
    }else{
      setValorStrawberry(parseInt(localStorage.getItem('valorStrawberry')))
    }

    if(localStorage.getItem('strawberry') == undefined){
      setNum7(0)
    }else{
      setNum7(parseInt(localStorage.getItem('strawberry')))
    }

    if(localStorage.getItem('valorOrange') == undefined){
      setValorOrange(0)
    }else{
      setValorOrange(parseInt(localStorage.getItem('valorOrange')))
    }

    if(localStorage.getItem('orange') == undefined){
      setNum8(0)
    }else{
      setNum8(parseInt(localStorage.getItem('orange')))
    }

    if(localStorage.getItem('valorPineapple') == undefined){
      setValorPineapple(0)
    }else{
      setValorPineapple(parseInt(localStorage.getItem('valorPineapple')))
    }

    if(localStorage.getItem('pineapple') == undefined){
      setNum9(0)
    }else{
      setNum9(parseInt(localStorage.getItem('pineapple')))
    }

    if(localStorage.getItem('valorCoca') == undefined){
      setValorCoca(0)
    }else{
      setValorCoca(parseInt(localStorage.getItem('valorCoca')))
    }

    if(localStorage.getItem('coca') == undefined){
      setNum10(0)
    }else{
      setNum10(parseInt(localStorage.getItem('coca')))
    }

    if(localStorage.getItem('valorGuarana') == undefined){
      setValorGuarana(0)
    }else{
      setValorGuarana(parseInt(localStorage.getItem('valorGuarana')))
    }

    if(localStorage.getItem('guarana') == undefined){
      setNum11(0)
    }else{
      setNum11(parseInt(localStorage.getItem('guarana')))
    }

    if(localStorage.getItem('valorFanta') == undefined){
      setValorFanta(0)
    }else{
      setValorFanta(parseInt(localStorage.getItem('valorFanta')))
    }

    if(localStorage.getItem('fanta') == undefined){
      setNum12(0)
    }else{
      setNum12(parseInt(localStorage.getItem('fanta')))
    }
  })

            
  const [num7 , setNum7] = useState(0)
  const [valorStrawberry, setValorStrawberry ]= useState(0)
  
  function add7(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum7(num7 + 1)
    setValorStrawberry(valorStrawberry + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('strawberry', num7 + 1)
    localStorage.setItem('valorStrawberry', valorStrawberry + 2) 
  }

  const [num8 , setNum8] = useState(0)
  const [valorOrange, setValorOrange] = useState(0)

  function add8(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum8(num8 + 1)
    setValorOrange(valorOrange + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('orange', num8 + 1)
    localStorage.setItem('valorOrange', valorOrange + 2)
  }

  const [num9 , setNum9] = useState(0)
  const [valorPineapple, setValorPineapple] = useState(0)

  function add9(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum9(num9 + 1)
    setValorPineapple(valorPineapple + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('pineapple', num9 + 1)
    localStorage.setItem('valorPineapple', valorPineapple + 2)
  }

  const [num10, setNum10] = useState(0)
  const [valorCoca, setValorCoca] = useState(0)

  function add10(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum10(num10 + 1)
    setValorCoca(valorCoca + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('coca', num10 + 1)
    localStorage.setItem('valorCoca', valorCoca + 2)
  }

  const [num11, setNum11] = useState(0)
  const [valorGuarana, setValorGuarana] = useState(0)

  function add11(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum11(num11 + 1)
    setValorGuarana(valorGuarana + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('guarana', num11 + 1)
    localStorage.setItem('valorGuarana', valorGuarana + 2)
  }

  const [num12, setNum12] = useState(0)
  const [valorFanta, setValorFanta] = useState(0)

  function add12(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum12(num12 + 1)
    setValorFanta(valorFanta + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('fanta', num12 + 1)
    localStorage.setItem('valorFanta', valorFanta + 2)
  }

  return(
    <main>
      <nav id='navegar' className='nav-mid'>
        <h1><span class="material-symbols-outlined">fastfood</span>Food Burgers</h1>
        <div className='add-item' id='add'>
          <Link to='/cart' className='cart'>
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className='numero' id='cart'>{count}</div>
          </Link>
        </div>
        <div className='container-menu' id='containe-menu' onClick={clickMenu}>
          <span class="material-symbols-outlined menu">menu</span>
        </div>
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
      <section className='sec1'>
        <div className='container' id='container1'>
          <div id='prot1'><Product nome='Strawberry juice' classN='img7' link='/strawberry' price='US$ 2.00' botao={add7}/></div>
          <div id='prot2'><Product nome='Orange juice' classN='img8' link='/orange' price='US$ 2.00' botao={add8}/></div>
          <div id='prot3'><Product nome='Pineapple juice' classN='img9' link='/pineapple' price='US$ 2.00' botao={add9}/></div>
        </div>
        <div className='container' id='container2'>
          <div id='prot4'><Product nome='Coca Cola' classN='img10' link='/coca' price='US$ 2.00' botao={add10}/></div>
          <div id='prot5'><Product nome='Guarana' classN='img11' link='/guarana' price='US$ 2.00' botao={add11}/></div>
          <div id='prot6'><Product nome='Fanta' classN='img12' link='/fanta' price='US$ 2.00' botao={add12}/></div>
        </div>
      </section>
    </main>
  )
}



export default Drinks;