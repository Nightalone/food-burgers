import React from 'react';
import { Link } from 'react-router-dom';

function Product(props){

    return(
        <div className='container-img'>
          <Link to={props.link}><div className={props.classN}></div></Link>
          <div className='name'>
            <h1 className='titulo'>{props.nome}</h1>
            <p className='price'>{props.price}</p>
            <span className="material-symbols-outlined car" onClick={props.botao}>add_shopping_cart</span>
          </div>
        </div>
    )
}

export default Product;