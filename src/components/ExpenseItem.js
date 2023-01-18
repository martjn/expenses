import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){
    return (
        <div className="expense-item">
            <ExpenseDate date={props.item.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.item.title}</h2>
                <div className="expense-item__price">{props.item.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem