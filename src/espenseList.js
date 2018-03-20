import {connect} from 'react-redux';


const ExpenseList=(props)=>{
    return (
        <div>
            Expense list
            {props.expenses.expenses.description}
        </div>
    )
}

const ConnectedExpenseList=connect((state)=>{
    return (
        {
            expenses:state
        }
    )
})(ExpenseList);


export {ConnectedExpenseList}