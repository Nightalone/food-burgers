import React from 'react';

function Burgers(props){
    return(
        <div className='container-img'>
         <a><div className={props.classN}></div></a>
          <div className='name'>
            <h1>{props.nome}</h1>
          </div>
        </div>
    )
}

export default Burgers;