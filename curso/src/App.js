import logo from './logo.svg';
import './App.css';
//Importamos nuestros componentes
import { primerComponente } from './components/primerComponente.js';
import { segundoComponente } from './components/primerComponente.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <primerComponente/>
        <segundoComponente/>

      </header>
    </div>
  );
}

export default App;
