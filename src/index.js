import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//COMPONENTES
import Home from './components/Home';
import Header from './components/Header';
import Produtos from './components/Produtos';
import OndeComprar from './components/OndeComprar';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Produtos/>
    <OndeComprar/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);