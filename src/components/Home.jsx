import React, { useState,useEffect } from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';


function Home(){

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
    if(valor === 'cheeseburger'){
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'x-bacon'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'x-salad'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'chicken'){
      document.querySelector('#prot5').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'double cheddar'){
      document.querySelector('#prot4').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
      document.querySelector('section').classList.add('sec2');
      document.querySelector('section').classList.remove('sec1');
    }else if(valor === 'x-everything'){
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

    if(localStorage.getItem('valorCheese') == undefined){
      setValorb(0)
    }else{
      setValorb(parseFloat(localStorage.getItem('valorCheese')))
    }

    if(localStorage.getItem('burger') == undefined){
      setNum1(0)
    }else{
      setNum1(parseInt(localStorage.getItem('burger')))
    }

    if(localStorage.getItem('valorBacon') == undefined){
      setValorBacon(0)
    }else{
      setValorBacon(parseInt(localStorage.getItem('valorBacon')))
    }

    if(localStorage.getItem('x-bacon') == undefined){
      setNum2(0)
    }else{
      setNum2(parseInt(localStorage.getItem('x-bacon')))
    }

    if(localStorage.getItem('valorSalad') == undefined){
      setValorSalad(0)
    }else{
      setValorSalad(parseInt(localStorage.getItem('valorSalad')))
    }

    if(localStorage.getItem('x-salad') == undefined){
      setNum3(0)
    }else{
      setNum3(parseInt(localStorage.getItem('x-salad')))
    }

    if(localStorage.getItem('valorChicken') == undefined){
      setValorChicken(0)
    }else{
      setValorChicken(parseInt(localStorage.getItem('valorChicken')))
    }

    if(localStorage.getItem('chicken') == undefined){
      setNum4(0)
    }else{
      setNum4(parseInt(localStorage.getItem('chicken')))
    }

    if(localStorage.getItem('valorCheddar') == undefined){
      setValorCheddar(0)
    }else{
      setValorCheddar(parseInt(localStorage.getItem('valorCheddar')))
    }

    if(localStorage.getItem('cheddar') == undefined){
      setNum5(0)
    }else{
      setNum5(parseInt(localStorage.getItem('cheddar')))
    }

    if(localStorage.getItem('valorEverything') == undefined){
      setValorEverything(0)
    }else{
      setValorEverything(parseInt(localStorage.getItem('valorEverything')))
    }

    if(localStorage.getItem('everything') == undefined){
      setNum6(0)
    }else{
      setNum6(parseInt(localStorage.getItem('everything')))
    }

  })
    
  const [num1 , setNum1] = useState(0)
  const [valorb, setValorb ]= useState(0)
  
  function add1(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum1(num1 + 1)
    setValorb(valorb + 1)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('burger', num1 + 1)
    localStorage.setItem('valorCheese', valorb + 1) 
  }

  const [num2 , setNum2] = useState(0)
  const [valorBacon, setValorBacon] = useState(0)

  function add2(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum2(num2 + 1)
    setValorBacon(valorBacon + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('x-bacon', num2 + 1)
    localStorage.setItem('valorBacon', valorBacon + 2)
  }

  const [num3 , setNum3] = useState(0)
  const [valorSalad, setValorSalad] = useState(0)

  function add3(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum3(num3 + 1)
    setValorSalad(valorSalad + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('x-salad', num3 + 1)
    localStorage.setItem('valorSalad', valorSalad + 2)
  }

  const [num4, setNum4] = useState(0)
  const [valorChicken, setValorChicken] = useState(0)

  function add4(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum4(num4 + 1)
    setValorChicken(valorChicken + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('chicken', num4 + 1)
    localStorage.setItem('valorChicken', valorChicken + 2)
  }

  const [num5, setNum5] = useState(0)
  const [valorCheddar, setValorCheddar] = useState(0)

  function add5(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum5(num5 + 1)
    setValorCheddar(valorCheddar + 3)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('cheddar', num5 + 1)
    localStorage.setItem('valorCheddar', valorCheddar + 3)
  }

  const [num6, setNum6] = useState(0)
  const [valorEverything, setValorEverything] = useState(0)

  function add6(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum6(num6 + 1)
    setValorEverything(valorEverything + 4)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('everything', num6 + 1)
    localStorage.setItem('valorEverything', valorEverything + 4)
  }

  return(

    <main>
      <nav id='navegar' className='nav-mid'>
        <h1 id='logo'><span class="material-symbols-outlined">fastfood</span>Food Burgers</h1>
        <div className='add-item' id='add'>
          <Link to='/cart' className='cart'>
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className='numero' id='cart'>{count}</div>
          </Link>
        </div>
        <div className='container-menu' id='containe-menu' onClick={clickMenu}>
          <span className="material-symbols-outlined menu">menu</span>
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
          <div id='prot1' className='caixa'><Product nome='Cheeseburger' classN='img1' link='/cheeseburger' price='US$ 1.00' botao={add1}/></div>
          <div id='prot2'><Product nome='X-Bacon' classN='img2' link='/bacon' price='US$ 2.00' botao={add2}/></div>
          <div id='prot3'><Product nome='X-Salad' classN='img3' link='/salad' price='US$ 2.00' botao={add3}/></div>
        </div>
        <div className='container' id='container2'>
          <div id='prot4'><Product nome='Chicken' classN='img4' link='/chicken' price='US$ 2.00' botao={add4}/></div>
          <div id='prot5'><Product nome='Double Cheddar' classN='img5' link='/cheddar' price='US$ 3.00' botao={add5}/></div>
          <div id='prot6'><Product nome='X-Everything' classN='img6' link='/everything' price='US$ 4.00' botao={add6}/></div>
        </div>
      </section>
    </main>
  )
}


export default Home;