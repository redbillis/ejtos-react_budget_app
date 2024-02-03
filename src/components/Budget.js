import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const value = event.target.value;
    if (value > 20000) {
      alert("Budget cannot exceed 20000");
      return;
    }
    if (value < totalExpenses) {
      alert("Budget cannot be less than the total spending");
      return;
    }
    setNewBudget(value);
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        {budget}
      </span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
