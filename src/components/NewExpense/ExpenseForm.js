import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  /* const [userInput, setUserInput] = useState({
     enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    
 });
  */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const dateChange = (e) => {
    /* setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
    */
    setEnteredDate(e.target.value);
  };
  const amountChange = (e) => {
    /* setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
    */
    setEnteredAmount(e.target.value);
  };
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
    */
    /* setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
    */
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: {enteredTitle}</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount:{enteredAmount} </label>
          <input type="number" min="0.01" step="0.01" onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date:{enteredDate}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

/*
co znamená ...
*/
