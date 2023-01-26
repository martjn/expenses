import React from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label className="label">Title</label>
                    <input className="input" type="number" type="text"/>
                </div>
                <div className="new-expense__control">
                    <label className="label">Amount</label>
                    <input className="input" type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label className="label">Date</label>
                    <input className="input" type="number" type="date" min="2023-01-18" max="2025-12-31"/>
                </div>
            </div>
            <div>
                <button className="button" type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm