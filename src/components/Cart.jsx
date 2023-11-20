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

        if(localStorage.getItem('burger') == undefined || localStorage.getItem('burger') == 0){
            document.querySelector('#cheese').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('x-bacon') == undefined || localStorage.getItem('x-bacon') == 0){
            document.querySelector('#xbacon').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('x-salad') == undefined || localStorage.getItem('x-salad') == 0){
            document.querySelector('#xsalad').setAttribute('class', 'sumirBurger')
        }

    })

    const [valorChe, setValorCheese] = useState(parseInt(localStorage.getItem('valorCheese')))
    const [num1 , setNum1] = useState(parseInt(localStorage.getItem('burger')))
      
    function somar1(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorCheese(valorChe + 1)
        localStorage.setItem('valorCheese',valorChe + 1)

        setNum1(num1 + 1)
        localStorage.setItem('burger', num1 + 1)
    }
    
    function subtrair1(){
        setCount(count - 1)
        localStorage.setItem('num', count - 1)

        setValorCheese(valorChe - 1)
        localStorage.setItem('valorCheese',valorChe - 1)

        setNum1(num1 - 1)
        localStorage.setItem('burger', num1 - 1)

        if(parseInt(localStorage.getItem('burger')) == 0){
            document.querySelector('#cheese').setAttribute('class', 'sumirBurger')
        }

        
    }

    const [valorBacon, setValorBacon] = useState(parseInt(localStorage.getItem('valorBacon')))
    const [num2 , setNum2] = useState(parseInt(localStorage.getItem('x-bacon')))

    function somar2(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorBacon(valorBacon + 2)
        localStorage.setItem('valorBacon',valorBacon + 2)

        setNum2(num2 + 1)
        localStorage.setItem('x-bacon', num2 + 1)
    }

    function subtrair2(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorBacon(valorBacon - 2)
        localStorage.setItem('valorBacon',valorBacon - 2)

        setNum2(num2 - 1)
        localStorage.setItem('x-bacon', num2 - 1)

        if(parseInt(localStorage.getItem('x-bacon')) == 0){
            document.querySelector('#xbacon').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorSalad, setValorSalad] = useState(parseInt(localStorage.getItem('valorSalad')))
    const [num3 , setNum3] = useState(parseInt(localStorage.getItem('x-salad')))

    function somar3(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorSalad(valorSalad + 2)
        localStorage.setItem('valorSalad',valorSalad + 2)

        setNum3(num3 + 1)
        localStorage.setItem('x-salad', num3 + 1)
    }

    function subtrair3(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorSalad(valorSalad - 2)
        localStorage.setItem('valorSalad',valorSalad - 2)

        setNum3(num3 - 1)
        localStorage.setItem('x-salad', num3 - 1)

        if(parseInt(localStorage.getItem('x-salad')) == 0){
            document.querySelector('#xsalad').setAttribute('class', 'sumirBurger')
        }
    }
    
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

            <div className='containerCart' id='caixa'><h1 className='semItens'>
                No items in shopping cart</h1>

                <div className='caixaBurger' id='cheese'>
                    <div className='cheeseburger'></div>
                    <h1>Cheeseburger</h1>
                    <div className='preco'>US$ {valorChe}.00</div>
                    <button className='btn0' onClick={somar1}>+</button>
                    <div className='contar'>{parseInt(localStorage.getItem('burger'))}</div>
                    <button className='btn2' onClick={subtrair1}>-</button>
                </div>    

                <div className='caixaBurger' id='xbacon'>
                    <div className='bacon'></div>
                    <h1>X-Bacon</h1>
                    <div className='preco'>US$ {valorBacon}.00</div>
                    <button className='btn0' onClick={somar2}>+</button>
                    <div className='contar'>{parseInt(localStorage.getItem('x-bacon'))}</div>
                    <button className='btn2' onClick={subtrair2}>-</button>
                </div> 

                <div className='caixaBurger' id='xsalad'>
                    <div className='salad'></div>
                    <h1>X-Salad</h1>
                    <div className='preco'>US$ {valorSalad}.00</div>
                    <button className='btn0' onClick={somar3}>+</button>
                    <div className='contar'>{parseInt(localStorage.getItem('x-salad'))}</div>
                    <button className='btn2' onClick={subtrair3}>-</button>
                </div> 

            </div>
          

        </main>
    )
}

export default Cart;