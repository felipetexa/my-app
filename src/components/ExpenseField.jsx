import { useState } from "react";

export const ExpenseField = ({ displaySubtext }) => {
  const [expense, setExpense] = useState();

  return (
    <>
      <input type="text" onChange={(event) => setExpense(event.target.value)} />
      <button onClick={() => displaySubtext(`Gasto inserido: ${expense}`)}>
        INSERIR GASTO
      </button>
    </>
  );
};
