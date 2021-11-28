import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from './components/title'


function App() {

  const [subtext, setSubtext] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Title subtext={subtext}/>
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text"></input>
        <button onClick={() => setSubtext("Gasto inserido")}>INSERIR GASTO</button>
      </header>
    </div>
  );
}

export default App;
