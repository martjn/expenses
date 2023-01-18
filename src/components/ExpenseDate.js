function ExpenseDate(props){
    const day = props.expenseData.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.expenseData.date.toLocaleString('en-US', {month: 'long'})
    const year = props.expenseData.date.getFullYear()

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpenseDate