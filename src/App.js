import { useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { ExpenseField } from "./components/ExpenseField";
import ChartComponent from "./components/ChartComponent";


function App() {
  const [subtext, setSubtext] = useState();
  const data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Title subtext={subtext} />
        <ChartComponent data={data} />
        <ExpenseField displaySubtext={setSubtext} />
      </header>
    </div>
  );
}

export default App;
