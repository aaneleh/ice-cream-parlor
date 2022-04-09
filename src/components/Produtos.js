import React from 'react';

import Picole from '../assets/Picole.png';
import Sorvete from '../assets/Sorvete.png';

function Produtos() {
    return (
        <div className='produtos' id='produtos'>
            <br/>
            <div className="produto" id='produto_1'>
                <div className='produtos_img'>
                    <img src={Picole} alt='Picole'>
                    </img>
                </div>
                <div className='produtos_texto'>
                    <h2 className='produtos_titulo titulo'>
                        PICOLÉS
                    </h2>
                    <p className='produtos_descricao texto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis dolor expedita soluta quos ducimus, debitis asperiores sequi quibusdam qui vitae id provident labore atque consectetur assumenda a nam nostrum.
                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis dolor expedita soluta quos ducimus, debitis asperiores sequi quibusdam qui vitae id provident labore atque consectetur assumenda a nam nostrum.
                    </p>
                </div>
            </div>
            <br/>
            <div className="produto" id='produto_2'>
                <div className='produtos_img'>
                    <img src={Sorvete} alt='Sorvete'>
                    </img>
                </div>
                <div className='produtos_texto'>
                    <h2 className='produtos_titulo titulo'>
                        SORVETES
                    </h2>
                    <p className='produtos_descricao texto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis dolor expedita soluta quos ducimus, debitis asperiores sequi quibusdam qui vitae id provident labore atque consectetur assumenda a nam nostrum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis dolor expedita soluta quos ducimus, debitis asperiores sequi quibusdam qui vitae id provident labore atque consectetur assumenda a nam nostrum.
                    </p>
                </div>
            </div>
            <br/>
        </div>    
    )
}

export default Produtos;