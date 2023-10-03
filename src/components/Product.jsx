import React from 'react';
import { Link } from 'react-router-dom';

function Product(props){
    return(
        <div className='container-img'>
          <Link to={props.link}><div className={props.classN}></div></Link>
          <div className='name'>
            <h1>{props.nome}</h1>
            <p className='price'>{props.price}</p>
            <span class="material-symbols-outlined car">add_shopping_cart</span>
          </div>
        </div>
    )
}

export default Product;