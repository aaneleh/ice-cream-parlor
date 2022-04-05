import React, {useState} from 'react';

function Header() {

    /* COR DO HEADER */
    const [ headerActive, setHeaderActive ] = useState(false);
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 580){
            setHeaderActive(true);
        } else {
            setHeaderActive(false);
        }
    })

    /* VISIBILIDADE SIDEBAR */
    const [ sidebarActive, setSidebarActive ] = useState(false);
    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    }

    return (
        <nav className={headerActive ? 'header active' : 'header'} >
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
                    <a href="#onde-comprar">
                        <h3>
                            ONDE COMPRAR
                        </h3>
                    </a>
                </div>

                <div className='sidebar_icon' onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </div>

            <div className={sidebarActive ? 'sidebar active' : 'sidebar'}>
                <div className='sidebar-close-icon' onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </div>

                <a className='sidebar-item' href='#produtos'>
                    <h3> PRODUTOS </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 24 24" fill="currentColor"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M18.38,6.24C17.79,3.24,15.14,1,12,1S6.21,3.24,5.62,6.24C4.08,6.81,3,8.29,3,10c0,2.21,1.79,4,4,4 c0.12,0,0.23-0.02,0.34-0.02L12.07,23l4.61-9.03C16.79,13.98,16.89,14,17,14c2.21,0,4-1.79,4-4C21,8.29,19.92,6.81,18.38,6.24z M12.05,18.63l-2.73-5.21C10.15,13.79,11.06,14,12,14c0.95,0,1.88-0.21,2.72-0.6L12.05,18.63z M17,12c-0.52,0-1.01-0.2-1.39-0.56 l-0.56-0.54l-0.66,0.42C13.68,11.76,12.86,12,12,12s-1.68-0.24-2.39-0.69L8.95,10.9l-0.56,0.54C8.01,11.79,7.52,12,7,12 c-1.1,0-2-0.89-2-2c0-0.98,0.72-1.82,1.68-1.97L7.45,7.9l0.06-0.78C7.71,4.8,9.66,3,12,3s4.29,1.8,4.48,4.12l0.06,0.78l0.77,0.12 C18.28,8.18,19,9.01,19,10C19,11.1,18.1,12,17,12z"/></g></g></svg>
                </a>

                <a className='sidebar-item' href="#onde-comprar">
                    <h3> ONDE COMPRAR </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </a>
            </div>
        </nav>
    )
}

export default Header;