import React from 'react';

function Header() {
    return (
        <nav className='header'>
            <div className='header_content'>
                <div className='header_logo'>
                    <a href="#home">
                        <h3>
                                SUMMER'S <br/> ICE CREAM
                        </h3>
                    </a>
                </div>
                <div className='header_list'>
                    <a href="#produtos">
                        <h3>
                            PRODUTOS
                        </h3>
                    </a>
                    <a href="#onde comprar">
                        <h3>
                            ONDE COMPRAR
                        </h3>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;