import React, { useState, useEffect } from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';


function Desserts(){

  const  [aparecer, setAparecer] = useState(false)

  function clickMenu(){
    if(aparecer == false){
      document.querySelector('#itens').classList.remove('limpar1');
      document.querySelector('#searc').classList.remove('limpar2');
      document.querySelector("#navegar").style.height = '300px'
      setAparecer(true)
    }else{
      document.querySelector('#itens').classList.add('limpar1');
      document.querySelector('#searc').classList.add('limpar2');
      document.querySelector("#navegar").style.height = '140px'
      setAparecer(false)
    }
  }

  function pesquisar(){
    let valor = document.querySelector('#produto').value.toLowerCase();
    if(valor === 'banana split'){
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
    }else if(valor === 'cake'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot3').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
    }else if(valor === 'milk shake'){
      document.querySelector('#prot1').style.display = 'none';
      document.querySelector('#prot2').style.display = 'none';
      document.querySelector('#container2').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
    }else if(valor === 'mousse'){
      document.querySelector('#prot5').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
    }else if(valor === 'ice cream'){
      document.querySelector('#prot4').style.display = 'none';
      document.querySelector('#prot6').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
    }else if(valor === 'banoffee'){
      document.querySelector('#prot4').style.display = 'none';
      document.querySelector('#prot5').style.display = 'none';
      document.querySelector('#container1').style.display = 'none';
      document.querySelector('nav').classList.add('nav-small');
      document.querySelector('nav').classList.remove('nav-mid');
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
      
    }
  }

  const [count, setCount] = useState(0)

  useEffect(() => {
    
    if(localStorage.getItem('num') == undefined){
      setCount(0)
    }else{
      setCount(parseInt(localStorage.getItem('num')))
    }

    if(localStorage.getItem('valorBana') == undefined){
      setValorBanana(0)
    }else{
      setValorBanana(parseInt(localStorage.getItem('valorBanana')))
    }

    if(localStorage.getItem('banana') == undefined){
      setNum13(0)
    }else{
      setNum13(parseInt(localStorage.getItem('banana')))
    }

    if(localStorage.getItem('valorCake') == undefined){
      setValorCake(0)
    }else{
      setValorCake(parseInt(localStorage.getItem('valorCake')))
    }

    if(localStorage.getItem('cake') == undefined){
      setNum14(0)
    }else{
      setNum14(parseInt(localStorage.getItem('cake')))
    }

    if(localStorage.getItem('valorMilk') == undefined){
      setValorMilk(0)
    }else{
      setValorMilk(parseInt(localStorage.getItem('valorMilk')))
    }

    if(localStorage.getItem('milk') == undefined){
      setNum15(0)
    }else{
      setNum15(parseInt(localStorage.getItem('milk')))
    }

    if(localStorage.getItem('valorMousse') == undefined){
      setValorMousse(0)
    }else{
      setValorMousse(parseInt(localStorage.getItem('valorMousse')))
    }

    if(localStorage.getItem('mousse') == undefined){
      setNum16(0)
    }else{
      setNum16(parseInt(localStorage.getItem('mousse')))
    }

    if(localStorage.getItem('valorIce') == undefined){
      setValorIce(0)
    }else{
      setValorIce(parseInt(localStorage.getItem('valorIce')))
    }

    if(localStorage.getItem('ice') == undefined){
      setNum17(0)
    }else{
      setNum17(parseInt(localStorage.getItem('ice')))
    }

    if(localStorage.getItem('valorBanoffee') == undefined){
      setValorBanoffee(0)
    }else{
      setValorBanoffee(parseInt(localStorage.getItem('valorBanoffee')))
    }

    if(localStorage.getItem('banoffee') == undefined){
      setNum18(0)
    }else{
      setNum18(parseInt(localStorage.getItem('banoffee')))
    }

  })

  const [num13 , setNum13] = useState(0)
  const [valorBanana, setValorBanana ]= useState(0)
  
  function add13(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum13(num13 + 1)
    setValorBanana(valorBanana + 4)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('banana', num13 + 1)
    localStorage.setItem('valorBanana', valorBanana + 4) 
  }

  const [num14 , setNum14] = useState(0)
  const [valorCake, setValorCake] = useState(0)

  function add14(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum14(num14 + 1)
    setValorCake(valorCake + 5)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('cake', num14 + 1)
    localStorage.setItem('valorCake', valorCake + 5)
  }

  const [num15 , setNum15] = useState(0)
  const [valorMilk, setValorMilk] = useState(0)

  function add15(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum15(num15 + 1)
    setValorMilk(valorMilk + 3)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('milk', num15 + 1)
    localStorage.setItem('valorMilk', valorMilk + 3)
  }

  const [num16, setNum16] = useState(0)
  const [valorMousse, setValorMousse] = useState(0)

  function add16(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum16(num16 + 1)
    setValorMousse(valorMousse + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('mousse', num16 + 1)
    localStorage.setItem('valorMousse', valorMousse + 2)
  }

  const [num17, setNum17] = useState(0)
  const [valorIce, setValorIce] = useState(0)

  function add17(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum17(num17 + 1)
    setValorIce(valorIce + 2)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('ice', num17 + 1)
    localStorage.setItem('valorIce', valorIce + 2)
  }

  const [num18, setNum18] = useState(0)
  const [valorBanoffee, setValorBanoffee] = useState(0)

  function add18(){
    document.querySelector("#cart").innerHTML = `${count}`
    setCount(count + 1)
    setNum18(num18 + 1)
    setValorBanoffee(valorBanoffee + 3)
    localStorage.setItem('num', count + 1)
    localStorage.setItem('banoffee', num18 + 1)
    localStorage.setItem('valorBanoffee', valorBanoffee + 3)
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
      <section>
        <div className='container' id='container1'>
         <div id='prot1'><Product nome='Banana Split' classN='img13' link='/banana' price='US$ 4.00' botao={add13}/></div>
         <div id='prot2'><Product nome='Cake' classN='img14' link='/cake' price='US$ 5.00' botao={add14}/></div>
         <div id='prot3'><Product nome='Milk Shake' classN='img15' link='/milk' price='US$ 3.00' botao={add15}/></div>
        </div>
        <div className='container' id='container2'>
         <div id='prot4'><Product nome='Mousse' classN='img16' link='/mousse' price='US$ 2.00' botao={add16}/></div>
         <div id='prot5'><Product nome='Ice cream' classN='img17' link='/ice-cream' price='US$ 2.00' botao={add17}/></div>
         <div id='prot6'><Product nome='Banoffee' classN='img18' link='/banoffee' price='US$ 3.00' botao={add18}/></div>
        </div>
      </section>
    </main>
  )
}



export default Desserts;