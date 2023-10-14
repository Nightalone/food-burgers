import React from 'react';
import { useState } from 'react';

function Pesquisar(props){

    const [prod, setProd] = useState('')

    return(
        <div>
            let lista = {props.nomes}
            lista.toLowerCase();
            if({prod} === 'big mac'){
                setProd(() => {
                    document.querySelector('.container').classList.add('limpar1');
                })
            }
         
        </div>
    )
}

export default Pesquisar;