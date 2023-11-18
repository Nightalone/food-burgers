import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart(){

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
    
    const [count, setCount] = useState(0)
    const [num1 , setNum1] = useState(localStorage.getItem('burger'))
    const [num2 , setNum2] = useState(localStorage.getItem('x-bacon'))
    const [num3 , setNum3] = useState(localStorage.getItem('salad'))

    useEffect(() => {
      
        if(localStorage.getItem('num') == undefined){
            setCount(0)
        }else{
            setCount(parseInt(localStorage.getItem('num')))
        }

        if(count >= 1){
            document.querySelector('.semItens').classList.add('limpar0')
    
        }else if(count == 0){
            document.querySelector('.semItens').classList.remove('limpar0')
        }
    
        if(num1 >= 1 ){

            const caixaBurger = document.createElement('div')
            caixaBurger.classList.add('caixaBurger')     
            document.querySelector('#caixa').appendChild(caixaBurger)
           
            const cheese = document.createElement('div')
            cheese.classList.add('cheeseburger')     
            document.querySelector('.caixaBurger').appendChild(cheese)
    
            const tit = document.createElement('h1')
            tit.innerHTML = 'Cheeseburger'
            document.querySelector('.caixaBurger').appendChild(tit)

            const preco = document.createElement('div')
            preco.classList.add('preco')
            preco.innerHTML = 'US$ '+ localStorage.getItem('valorCheese') + '.00'
            document.querySelector('.caixaBurger').appendChild(preco)
    
            const btn1= document.createElement('button')
            btn1.classList.add('btn0')
            btn1.innerHTML = '+'
            document.querySelector(".caixaBurger").appendChild(btn1)
    
            const numero = document.createElement('div')
            numero.classList.add('contar')
            numero.innerHTML = parseInt(localStorage.getItem('burger'))
            document.querySelector('.caixaBurger').appendChild(numero)
    
            const btn2= document.createElement('button')
            btn2.classList.add('btn2')
            btn2.innerHTML = '-'
            document.querySelector(".caixaBurger").appendChild(btn2) 
 
            setNum1(0)
        } 
        
        if(num2 >= 1 ){
     
            const caixaBacon = document.createElement('div')
            caixaBacon.classList.add('caixaBacon')     
            document.querySelector('#caixa').appendChild(caixaBacon)
           
            const bacon = document.createElement('div')
            bacon.classList.add('bacon')     
            document.querySelector('.caixaBacon').appendChild(bacon)
    
            const tit = document.createElement('h1')
            tit.innerHTML = 'X-Bacon'
            document.querySelector('.caixaBacon').appendChild(tit)

            const preco = document.createElement('div')
            preco.classList.add('preco')
            preco.innerHTML = 'US$ '+ localStorage.getItem('valorBacon') + '.00'
            document.querySelector('.caixaBacon').appendChild(preco)
    
            const btn1= document.createElement('button')
            btn1.classList.add('btn0')
            btn1.innerHTML = '+'
            document.querySelector(".caixaBacon").appendChild(btn1)
    
            const numero = document.createElement('div')
            numero.classList.add('contar')
            numero.innerHTML = parseInt(localStorage.getItem('x-bacon'))
            document.querySelector('.caixaBacon').appendChild(numero)
    
            const btn2= document.createElement('button')
            btn2.classList.add('btn2')
            btn2.innerHTML = '-'
            document.querySelector(".caixaBacon").appendChild(btn2) 
 
            setNum2(0)
            
        }

        if(num3 >= 1 ){
     
            const cheese = document.createElement('div')
            cheese.classList.add('salad')     
            document.querySelector('#caixa').appendChild(cheese)
    
            const tit = document.createElement('h1')
            tit.innerHTML = 'X-Salad'
            document.querySelector('#caixa').appendChild(tit)
    
            const btn1= document.createElement('button')
            btn1.innerHTML = '+'
            document.querySelector("#caixa").appendChild(btn1)
    
            const numero = document.createElement('div')
            numero.classList.add('contar')
            numero.innerHTML = parseInt(localStorage.getItem('x-bacon'))
            document.querySelector('#caixa').appendChild(numero)
    
            const btn2= document.createElement('button')
            btn2.innerHTML = '-'
            document.querySelector("#caixa").appendChild(btn2)
            
        }

    })
        
    
    return(
        <main>
            
            <nav id='navegar' className='nav-mid'>
                <h1><span class="material-symbols-outlined">fastfood</span>Food Burgers</h1>
                <div className='add-item' id='add'>
                    <span className="material-symbols-outlined">shopping_cart</span>
                <div className='numero' id='cart'>{ count }</div>
                </div>
                <div className='container-menu' id='containe-menu' onClick={clickMenu}>
                    <span className="material-symbols-outlined menu">menu</span>
                </div>
                <ul className='limpar1' id='itens'>
                    <Link to='/'><li>Burgers</li></Link>
                    <Link to='/drinks'><li>Drinks</li></Link>
                    <Link to='/desserts'><li>Desserts</li></Link>
                </ul>
            </nav>

            <div className='containerCart' id='caixa'><h1 className='semItens'>No items in shopping cart</h1></div>
          

        </main>
    )
}

export default Cart;