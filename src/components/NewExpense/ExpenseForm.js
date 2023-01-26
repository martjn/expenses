import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    console.log(enteredTitle)
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className="label">Title</label>
                    <input className="input" type="number" type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label className="label">Amount</label>
                    <input className="input" type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label className="label">Date</label>
                    <input className="input" type="number" type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div>
                <button className="button" type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm