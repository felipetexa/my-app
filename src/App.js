import { useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { ExpenseField } from "./components/ExpenseField";
import { ExpensesChart } from "./components/ExpensesChart";

function App() {
  const [subtext, setSubtext] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Title subtext={subtext} />
        <ExpensesChart displayData />
        <ExpenseField displaySubtext={setSubtext} />
      </header>
    </div>
  );
}

export default App;
