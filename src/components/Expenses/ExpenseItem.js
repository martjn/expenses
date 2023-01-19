import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

import React, {useState} from 'react';

const ExpenseItem = (props) => {
    /*const [title, setTitle] = useState(props.expenseData.title)
    const clickHandler = () => {
        setTitle('Update')
        console.log(title)
    }*/
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <Card className="expense-item__price">{props.expenseData.price}</Card>
            </div>
        </Card>
    )
}

export default ExpenseItem