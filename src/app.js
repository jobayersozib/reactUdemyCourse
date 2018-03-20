// import React from 'react'
// import ReactDOm from 'react-dom'
import Modal from 'react-modal';
import {Provider} from 'react-redux';
import './styles/style.scss'
import 'normalize.css/normalize.css'
import {store} from '../src/playground/redux'
import {addExpense} from '../src/actions/expenses'
import { BrowserRouter , Route} from 'react-router-dom'
import {Edashboard} from './expenseDashboard'

const ExpenseDashboard=()=>{
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
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/about" component={About} exact={true} />
            </div>
        </BrowserRouter>
)

store.dispatch(addExpense({description:"Description after refactoring",note:"Some note after refactoring",amount:1000}));

console.log(store.getState())

const jsx=(
    <Provider store={store}>
        <Edashboard/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById("app"));