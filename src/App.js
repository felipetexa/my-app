import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/Title";
import { ExpenseField } from "./components/ExpenseField";

function App() {
  const [subtext, setSubtext] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Title subtext={subtext} />
        <img src={logo} className="App-logo" alt="logo" />
        <ExpenseField displaySubtext={setSubtext} />
      </header>
    </div>
  );
}

export default App;
