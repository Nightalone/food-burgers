import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

function Cart(props){

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

            <div className='semItens'><h1>No items in shopping cart</h1></div>
            <div className='container'>
                <div className='containerFilho'></div>
            </div>

        </main>
    )
}

export default Cart;