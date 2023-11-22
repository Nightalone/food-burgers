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

        if(localStorage.getItem('chicken') == undefined || localStorage.getItem('chicken') == 0){
            document.querySelector('#chicken').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('cheddar') == undefined || localStorage.getItem('cheddar') == 0){
            document.querySelector('#cheddar').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('everything') == undefined || localStorage.getItem('everything') == 0){
            document.querySelector('#everything').setAttribute('class', 'sumirBurger')
        }
     
        if(valorTotal == 0){
            document.querySelector('#total').setAttribute('class', 'sumirBurger')
        }else{
            setValorTotal(
                valorChe + valorBacon + valorSalad + valorChicken + valorCheddar + valorEverything
            )
        }

   

    })

    const [valorChe, setValorCheese] = useState(parseInt(localStorage.getItem('valorCheese')) || 0)
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

    const [valorBacon, setValorBacon] = useState(parseInt(localStorage.getItem('valorBacon')) || 0)
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

    const [valorSalad, setValorSalad] = useState(parseInt(localStorage.getItem('valorSalad')) || 0)
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

    const [valorChicken, setValorChicken] = useState(parseInt(localStorage.getItem('valorChicken')) || 0)
    const [num4 , setNum4] = useState(parseInt(localStorage.getItem('chicken')))

    function somar4(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorChicken(valorChicken + 2)
        localStorage.setItem('valorChicken',valorChicken + 2)

        setNum4(num4 + 1)
        localStorage.setItem('chicken', num4 + 1)
    }

    function subtrair4(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorChicken(valorChicken - 2)
        localStorage.setItem('valorChicken',valorChicken - 2)

        setNum4(num4 - 1)
        localStorage.setItem('chicken', num4 - 1)

        if(parseInt(localStorage.getItem('chicken')) == 0){
            document.querySelector('#chicken').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorCheddar, setValorCheddar] = useState(parseInt(localStorage.getItem('valorCheddar')) || 0)
    const [num5 , setNum5] = useState(parseInt(localStorage.getItem('cheddar')))

    function somar5(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorCheddar(valorCheddar + 3)
        localStorage.setItem('valorCheddar',valorCheddar + 3)

        setNum5(num5 + 1)
        localStorage.setItem('cheddar', num5 + 1)
    }

    function subtrair5(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorCheddar(valorCheddar - 3)
        localStorage.setItem('valorCheddar',valorCheddar - 3)

        setNum5(num5 - 1)
        localStorage.setItem('cheddar', num5 - 1)

        if(parseInt(localStorage.getItem('cheddar')) == 0){
            document.querySelector('#cheddar').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorEverything, setValorEverything] = useState(parseInt(localStorage.getItem('valorEverything')) || 0)
    const [num6 , setNum6] = useState(parseInt(localStorage.getItem('everything')))

    function somar6(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorEverything(valorEverything + 4)
        localStorage.setItem('valorEverything',valorEverything + 4)

        setNum6(num6 + 1)
        localStorage.setItem('everything', num6 + 1)
    }

    function subtrair6(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorEverything(valorEverything - 4)
        localStorage.setItem('valorEverything', valorEverything - 4)

        setNum6(num6 - 1)
        localStorage.setItem('everything', num6 - 1)

        if(parseInt(localStorage.getItem('everything')) == 0){
            document.querySelector('#everything').setAttribute('class', 'sumirBurger')
        }
    }
    
    const [valorTotal, setValorTotal] = useState(
        parseInt(valorChe + valorBacon + valorSalad + valorChicken + valorCheddar + valorEverything)
        ) 

    function limparDados(){
        localStorage.clear()
        document.querySelector('#cheese').setAttribute('class', 'sumirBurger')
        document.querySelector('#xbacon').setAttribute('class', 'sumirBurger')
        document.querySelector('#xsalad').setAttribute('class', 'sumirBurger')
        document.querySelector('#chicken').setAttribute('class', 'sumirBurger')
        document.querySelector('#cheddar').setAttribute('class', 'sumirBurger')
        document.querySelector('#everything').setAttribute('class', 'sumirBurger')
        document.querySelector('#total').setAttribute('class', 'sumirBurger')
        setCount(0)
        alert('Purchase completed!')
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

            <div className='containerCart' id='caixa'>
            
                <h1 className='semItens'>No items in shopping cart</h1>

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

                <div className='caixaBurger' id='chicken'>
                    <div className='chicken'></div>
                    <h1>Chicken</h1>
                    <div className='preco'>US$ {valorChicken}.00</div>
                    <button className='btn0' onClick={somar4}>+</button>
                    <div className='contar'>{parseInt(localStorage.getItem('chicken'))}</div>
                    <button className='btn2' onClick={subtrair4}>-</button>
                </div> 

                <div className='caixaBurger' id='cheddar'>
                    <div className='cheddar'></div>
                    <h1>Cheddar</h1>
                    <div className='preco'>US$ {valorCheddar}.00</div>
                    <button className='btn0' onClick={somar5}>+</button>
                    <div className='contar'>{parseInt(localStorage.getItem('cheddar'))}</div>
                    <button className='btn2' onClick={subtrair5}>-</button>
                </div> 

                <div className='caixaBurger' id='everything'>
                    <div className='everything'></div>
                    <h1>X-Everything</h1>
                    <div className='preco'>US$ {valorEverything}.00</div>
                    <button className='btn0' onClick={somar6}>+</button>
                    <div className='contar'>{parseInt(localStorage.getItem('everything'))}</div>
                    <button className='btn2' onClick={subtrair6}>-</button>
                </div> 

                <div className='containerTotal' id='total'>
                    <div className='valorProduto'>
                        <h2>VALUE OF PRODUCTS</h2>
                    </div>
                    <div className='total'>
                        <h3>Total</h3> 
                        <h3>US${valorTotal}.00</h3>
                    </div>
                    <div className='finalizarCompra'>
                        <button className='finalizarBotao' onClick={limparDados}>Finalize the purchase</button>
                    </div>
                </div>

            </div> 

        </main>
    )
}

export default Cart;