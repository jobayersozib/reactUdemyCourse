// import React from 'react'
// import ReactDOm from 'react-dom'
import Modal from 'react-modal';
import './styles/style.scss'
import 'normalize.css/normalize.css'
import {store} from '../src/playground/redux'
import {addExpense} from '../src/actions/expenses'
import { BrowserRouter , Route} from 'react-router-dom'

const ExpenseDashBoardPage=()=>{
    return(
        <div>
        ExpenseDashBoardPage
        </div>
    )
}

const About=()=>{
    return (
        <div>
            About page
        </div>
    )
}

const routes=(
    
        <BrowserRouter>
            <div>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/about" component={About} exact={true} />
            </div>
        </BrowserRouter>
)

store.dispatch(addExpense({description:"Description after refactoring",note:"Some note after refactoring",amount:1000}));

console.log(store.getState())
ReactDOM.render(routes,document.getElementById("app"));