import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props){
    return(
        <div className="expenses">
            <ExpenseItem item={props.expenceData[0]}></ExpenseItem>
            <ExpenseItem item={props.expenceData[1]}></ExpenseItem>
        </div>
    )
}

export default Expenses