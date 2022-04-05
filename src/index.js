import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//COMPONENTES
import Home from './components/Home';
import Header from './components/Header';
import Produtos from './components/Produtos';

import Image from './assets/BackgroundWithText.png';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>

    <Home />
    {/* <PLACEHODLER /> */}
    {/* <div className="home">
      <img src={Image}></img>
    </div> */}
    
    <Produtos/>

    <Footer/>

  </React.StrictMode>,
  document.getElementById('root')
);