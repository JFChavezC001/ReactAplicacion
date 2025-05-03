/* eslint-disable no-unused-vars */

import logo from './logo.svg';
import './App.css';
//Importamos nuestros componentes
import React from 'react';
import {primerComponente} from './components/primerComponente'; // Sin llaves
import { segundoComponente } from './components/segundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <primerComponente/>{primerComponente()}
        <segundoComponente/>{segundoComponente()}

      </header>
    </div>
  );
}

export default App;
