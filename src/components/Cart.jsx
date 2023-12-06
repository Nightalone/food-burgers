import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart(){

    const  [aparecer, setAparecer] = useState(false)

    function clickMenu(){
        if(aparecer == false){
          document.querySelector('#itens').removeAttribute('class');
          
          setAparecer(true)
        }else{
          document.querySelector('#itens').setAttribute('class', 'limpar1');
          
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

        if(localStorage.getItem('strawberry') == undefined || localStorage.getItem('strawberry') == 0){
            document.querySelector('#strawberry').setAttribute('class', 'sumirBurger')
        }
        
        if(localStorage.getItem('orange') == undefined || localStorage.getItem('orange') == 0){
            document.querySelector('#orange').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('pineapple') == undefined || localStorage.getItem('pineapple') == 0){
            document.querySelector('#pineapple').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('coca') == undefined || localStorage.getItem('coca') == 0){
            document.querySelector('#coca').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('guarana') == undefined || localStorage.getItem('guarana') == 0){
            document.querySelector('#guarana').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('fanta') == undefined || localStorage.getItem('fanta') == 0){
            document.querySelector('#fanta').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('banana') == undefined || localStorage.getItem('banana') == 0){
            document.querySelector('#banana').setAttribute('class', 'sumirBurger')
        }
        
        if(localStorage.getItem('cake') == undefined || localStorage.getItem('cake') == 0){
            document.querySelector('#cake').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('milk') == undefined || localStorage.getItem('milk') == 0){
            document.querySelector('#milk').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('mousse') == undefined || localStorage.getItem('mousse') == 0){
            document.querySelector('#mousse').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('ice') == undefined || localStorage.getItem('ice') == 0){
            document.querySelector('#ice').setAttribute('class', 'sumirBurger')
        }

        if(localStorage.getItem('banoffee') == undefined || localStorage.getItem('banoffee') == 0){
            document.querySelector('#banoffee').setAttribute('class', 'sumirBurger')
        }
     
        if(valorTotal == 0){
            document.querySelector('#total').setAttribute('class', 'sumirBurger')
        }else{
            setValorTotal(
                valorChe + valorBacon + valorSalad + valorChicken + valorCheddar + valorEverything +
                valorStrawberry + valorOrange + valorPineapple + valorCoca + valorGuarana + valorFanta +
                valorBanana + valorCake + valorMilk + valorMousse + valorIce + valorBanoffee
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

    const [valorStrawberry, setValorStrawberry] = useState(parseInt(localStorage.getItem('valorStrawberry')) || 0)
    const [num7 , setNum7] = useState(parseInt(localStorage.getItem('strawberry')))

    function somar7(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorStrawberry(valorStrawberry + 2)
        localStorage.setItem('valorStrawberry',valorStrawberry + 2)

        setNum7(num7 + 1)
        localStorage.setItem('strawberry', num7 + 1)
    }

    function subtrair7(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorStrawberry(valorStrawberry - 2)
        localStorage.setItem('valorStrawberry', valorStrawberry - 2)

        setNum7(num7 - 1)
        localStorage.setItem('strawberry', num7 - 1)

        if(parseInt(localStorage.getItem('strawberry')) == 0){
            document.querySelector('#strawberry').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorOrange, setValorOrange] = useState(parseInt(localStorage.getItem('valorOrange')) || 0)
    const [num8 , setNum8] = useState(parseInt(localStorage.getItem('orange')))

    function somar8(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorOrange(valorOrange + 2)
        localStorage.setItem('valorOrange',valorOrange + 2)

        setNum8(num8 + 1)
        localStorage.setItem('orange', num8 + 1)
    }

    function subtrair8(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorOrange(valorOrange - 2)
        localStorage.setItem('valorOrange',valorOrange - 2)

        setNum8(num8 - 1)
        localStorage.setItem('orange', num8 - 1)

        if(parseInt(localStorage.getItem('orange')) == 0){
            document.querySelector('#orange').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorPineapple, setValorPineapple] = useState(parseInt(localStorage.getItem('valorPineapple')) || 0)
    const [num9 , setNum9] = useState(parseInt(localStorage.getItem('pineapple')))

    function somar9(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorPineapple(valorPineapple + 2)
        localStorage.setItem('valorPineapple',valorPineapple + 2)

        setNum9(num9 + 1)
        localStorage.setItem('pineapple', num9 + 1)
    }

    function subtrair9(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorPineapple(valorPineapple - 2)
        localStorage.setItem('valorPineapple',valorPineapple - 2)

        setNum9(num9 - 1)
        localStorage.setItem('pineapple', num9 - 1)

        if(parseInt(localStorage.getItem('pineapple')) == 0){
            document.querySelector('#pineapple').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorCoca, setValorCoca] = useState(parseInt(localStorage.getItem('valorCoca')) || 0)
    const [num10 , setNum10] = useState(parseInt(localStorage.getItem('coca')))

    function somar10(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorCoca(valorCoca + 2)
        localStorage.setItem('valorCoca',valorCoca + 2)

        setNum10(num10 + 1)
        localStorage.setItem('coca', num10 + 1)
    }

    function subtrair10(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorCoca(valorCoca - 2)
        localStorage.setItem('valorCoca',valorCoca - 2)

        setNum10(num10 - 1)
        localStorage.setItem('coca', num10 - 1)

        if(parseInt(localStorage.getItem('coca')) == 0){
            document.querySelector('#coca').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorGuarana, setValorGuarana] = useState(parseInt(localStorage.getItem('valorGuarana')) || 0)
    const [num11 , setNum11] = useState(parseInt(localStorage.getItem('guarana')))

    function somar11(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorGuarana(valorGuarana + 2)
        localStorage.setItem('valorGuarana',valorGuarana + 2)

        setNum11(num11 + 1)
        localStorage.setItem('guarana', num11 + 1)
    }

    function subtrair11(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorGuarana(valorGuarana - 2)
        localStorage.setItem('valorGuarana',valorGuarana - 2)

        setNum11(num11 - 1)
        localStorage.setItem('guarana', num11 - 1)

        if(parseInt(localStorage.getItem('guarana')) == 0){
            document.querySelector('#guarana').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorFanta, setValorFanta] = useState(parseInt(localStorage.getItem('valorFanta')) || 0)
    const [num12 , setNum12] = useState(parseInt(localStorage.getItem('fanta')))

    function somar12(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorFanta(valorFanta + 2)
        localStorage.setItem('valorFanta',valorFanta + 2)

        setNum12(num12 + 1)
        localStorage.setItem('fanta', num12 + 1)
    }

    function subtrair12(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorFanta(valorFanta - 2)
        localStorage.setItem('valorFanta', valorFanta - 2)

        setNum12(num12 - 1)
        localStorage.setItem('fanta', num12 - 1)

        if(parseInt(localStorage.getItem('fanta')) == 0){
            document.querySelector('#fanta').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorBanana, setValorBanana] = useState(parseInt(localStorage.getItem('valorBanana')) || 0)
    const [num13 , setNum13] = useState(parseInt(localStorage.getItem('banana')))

    function somar13(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorBanana(valorBanana + 4)
        localStorage.setItem('valorBanana', valorBanana + 4)

        setNum13(num13 + 1)
        localStorage.setItem('banana', num13 + 1)
    }

    function subtrair13(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorBanana(valorBanana - 4)
        localStorage.setItem('valorbanana', valorBanana - 4)

        setNum13(num13 - 1)
        localStorage.setItem('banana', num13 - 1)

        if(parseInt(localStorage.getItem('banana')) == 0){
            document.querySelector('#banana').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorCake, setValorCake] = useState(parseInt(localStorage.getItem('valorCake')) || 0)
    const [num14 , setNum14] = useState(parseInt(localStorage.getItem('cake')))

    function somar14(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorCake(valorCake + 5)
        localStorage.setItem('valorCake',valorCake + 5)

        setNum14(num14 + 1)
        localStorage.setItem('cake', num14 + 1)
    }

    function subtrair14(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorCake(valorCake - 5)
        localStorage.setItem('valorCake',valorCake - 5)

        setNum14(num14 - 1)
        localStorage.setItem('cake', num14 - 1)

        if(parseInt(localStorage.getItem('cake')) == 0){
            document.querySelector('#cake').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorMilk, setValorMilk] = useState(parseInt(localStorage.getItem('valorMilk')) || 0)
    const [num15 , setNum15] = useState(parseInt(localStorage.getItem('milk')))

    function somar15(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorMilk(valorMilk + 3)
        localStorage.setItem('valorMilk',valorMilk + 3)

        setNum15(num15 + 1)
        localStorage.setItem('milk', num15 + 1)
    }

    function subtrair15(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorMilk(valorMilk - 3)
        localStorage.setItem('valorMilk',valorMilk - 3)

        setNum15(num15 - 1)
        localStorage.setItem('milk', num15 - 1)

        if(parseInt(localStorage.getItem('milk')) == 0){
            document.querySelector('#milk').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorMousse, setValorMousse] = useState(parseInt(localStorage.getItem('valorMousse')) || 0)
    const [num16 , setNum16] = useState(parseInt(localStorage.getItem('mousse')))

    function somar16(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorMousse(valorMousse + 2)
        localStorage.setItem('valorMosse',valorMousse + 2)

        setNum16(num16 + 1)
        localStorage.setItem('mousse', num16 + 1)
    }

    function subtrair16(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorMousse(valorMousse - 2)
        localStorage.setItem('valorMousse',valorMousse - 2)

        setNum16(num16 - 1)
        localStorage.setItem('mousse', num16 - 1)

        if(parseInt(localStorage.getItem('mousse')) == 0){
            document.querySelector('#mousse').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorIce, setValorIce] = useState(parseInt(localStorage.getItem('valorIce')) || 0)
    const [num17 , setNum17] = useState(parseInt(localStorage.getItem('ice')))

    function somar17(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorIce(valorIce + 2)
        localStorage.setItem('valorIce',valorIce + 2)

        setNum17(num17 + 1)
        localStorage.setItem('ice', num17 + 1)
    }

    function subtrair17(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorIce(valorIce - 2)
        localStorage.setItem('valorIce',valorIce - 2)

        setNum17(num17 - 1)
        localStorage.setItem('ice', num17 - 1)

        if(parseInt(localStorage.getItem('ice')) == 0){
            document.querySelector('#ice').setAttribute('class', 'sumirBurger')
        }
    }

    const [valorBanoffee, setValorBanoffee] = useState(parseInt(localStorage.getItem('valorBanoffee')) || 0)
    const [num18 , setNum18] = useState(parseInt(localStorage.getItem('banoffee')))

    function somar18(){
        setCount(count + 1)
        localStorage.setItem('num', count + 1)

        setValorBanoffee(valorBanoffee + 3)
        localStorage.setItem('valorBanoffee',valorBanoffee + 3)

        setNum18(num18 + 1)
        localStorage.setItem('banoffee', num18 + 1)
    }

    function subtrair18(){
        setCount(count + 1)
        localStorage.setItem('num', count - 1)

        setValorBanoffee(valorBanoffee - 3)
        localStorage.setItem('valorBanoffee', valorBanoffee - 3)

        setNum18(num18 - 1)
        localStorage.setItem('banoffee', num18 - 1)

        if(parseInt(localStorage.getItem('banoffee')) == 0){
            document.querySelector('#banoffee').setAttribute('class', 'sumirBurger')
        }
    }
    
    const [valorTotal, setValorTotal] = useState(
        parseInt(valorChe + valorBacon + valorSalad + valorChicken + valorCheddar + valorEverything +
            valorStrawberry + valorOrange + valorPineapple + valorCoca + valorGuarana + valorFanta +
            valorBanana + valorCake + valorMilk + valorMousse + valorIce + valorBanoffee)
        ) 

    function limparDados(){
        localStorage.clear()
        document.querySelector('#cheese').setAttribute('class', 'sumirBurger')
        document.querySelector('#xbacon').setAttribute('class', 'sumirBurger')
        document.querySelector('#xsalad').setAttribute('class', 'sumirBurger')
        document.querySelector('#chicken').setAttribute('class', 'sumirBurger')
        document.querySelector('#cheddar').setAttribute('class', 'sumirBurger')
        document.querySelector('#everything').setAttribute('class', 'sumirBurger')
        document.querySelector('#strawberry').setAttribute('class', 'sumirBurger')
        document.querySelector('#orange').setAttribute('class', 'sumirBurger')
        document.querySelector('#pineapple').setAttribute('class', 'sumirBurger')
        document.querySelector('#coca').setAttribute('class', 'sumirBurger')
        document.querySelector('#guarana').setAttribute('class', 'sumirBurger')
        document.querySelector('#fanta').setAttribute('class', 'sumirBurger')
        document.querySelector('#banana').setAttribute('class', 'sumirBurger')
        document.querySelector('#cake').setAttribute('class', 'sumirBurger')
        document.querySelector('#milk').setAttribute('class', 'sumirBurger')
        document.querySelector('#mousse').setAttribute('class', 'sumirBurger')
        document.querySelector('#ice').setAttribute('class', 'sumirBurger')
        document.querySelector('#banoffee').setAttribute('class', 'sumirBurger')
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
                    <div className='numero' id='cart'>{count}</div>
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
                    <div className='botoes'>
                        <button className='btn0' onClick={somar1}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('burger'))}</div>
                        <button className='btn2' onClick={subtrair1}>-</button>
                    </div>
                </div>    

                <div className='caixaBurger' id='xbacon'>
                    <div className='bacon'></div>
                    <h1>X-Bacon</h1>
                    <div className='preco'>US$ {valorBacon}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar2}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('x-bacon'))}</div>
                        <button className='btn2' onClick={subtrair2}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='xsalad'>
                    <div className='salad'></div>
                    <h1>X-Salad</h1>
                    <div className='preco'>US$ {valorSalad}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar3}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('x-salad'))}</div>
                        <button className='btn2' onClick={subtrair3}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='chicken'>
                    <div className='chicken'></div>
                    <h1>Chicken</h1>
                    <div className='preco'>US$ {valorChicken}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar4}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('chicken'))}</div>
                        <button className='btn2' onClick={subtrair4}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='cheddar'>
                    <div className='cheddar'></div>
                    <h1>Double Cheddar</h1>
                    <div className='preco'>US$ {valorCheddar}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar5}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('cheddar'))}</div>
                        <button className='btn2' onClick={subtrair5}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='everything'>
                    <div className='everything'></div>
                    <h1>X-Everything</h1>
                    <div className='preco'>US$ {valorEverything}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar6}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('everything'))}</div>
                        <button className='btn2' onClick={subtrair6}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='strawberry'>
                    <div className='strawberry'></div>
                    <h1>Strawberry Juice</h1>
                    <div className='preco'>US$ {valorStrawberry}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar7}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('strawberry'))}</div>
                        <button className='btn2' onClick={subtrair7}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='orange'>
                    <div className='orange'></div>
                    <h1>Orange Juice</h1>
                    <div className='preco'>US$ {valorOrange}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar8}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('orange'))}</div>
                        <button className='btn2' onClick={subtrair8}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='pineapple'>
                    <div className='pineapple'></div>
                    <h1>Pineapple Juice</h1>
                    <div className='preco'>US$ {valorPineapple}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar9}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('pineapple'))}</div>
                        <button className='btn2' onClick={subtrair9}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='coca'>
                    <div className='coca'></div>
                    <h1>Coca Cola</h1>
                    <div className='preco'>US$ {valorCoca}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar10}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('coca'))}</div>
                        <button className='btn2' onClick={subtrair10}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='guarana'>
                    <div className='guarana'></div>
                    <h1>Guarana</h1>
                    <div className='preco'>US$ {valorGuarana}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar11}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('guarana'))}</div>
                        <button className='btn2' onClick={subtrair11}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='fanta'>
                    <div className='fanta'></div>
                    <h1>Fanta</h1>
                    <div className='preco'>US$ {valorFanta}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar12}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('fanta'))}</div>
                        <button className='btn2' onClick={subtrair12}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='banana'>
                    <div className='banana'></div>
                    <h1>Banana Split</h1>
                    <div className='preco'>US$ {valorBanana}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar13}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('banana'))}</div>
                        <button className='btn2' onClick={subtrair13}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='cake'>
                    <div className='cake'></div>
                    <h1>Cake</h1>
                    <div className='preco'>US$ {valorCake}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar14}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('cake'))}</div>
                        <button className='btn2' onClick={subtrair14}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='milk'>
                    <div className='milk'></div>
                    <h1>Milk Shake</h1>
                    <div className='preco'>US$ {valorMilk}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar15}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('milk'))}</div>
                        <button className='btn2' onClick={subtrair15}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='mousse'>
                    <div className='mousse'></div>
                    <h1>Mousse</h1>
                    <div className='preco'>US$ {valorMousse}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar16}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('mousse'))}</div>
                        <button className='btn2' onClick={subtrair16}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='ice'>
                    <div className='ice'></div>
                    <h1>Ice Cream</h1>
                    <div className='preco'>US$ {valorIce}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar17}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('ice'))}</div>
                        <button className='btn2' onClick={subtrair17}>-</button>
                    </div>
                </div> 

                <div className='caixaBurger' id='banoffee'>
                    <div className='banoffee'></div>
                    <h1>Banoffee</h1>
                    <div className='preco'>US$ {valorBanoffee}.00</div>
                    <div className='botoes'>
                        <button className='btn0' onClick={somar18}>+</button>
                        <div className='contar'>{parseInt(localStorage.getItem('banoffee'))}</div>
                        <button className='btn2' onClick={subtrair18}>-</button>
                    </div>
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