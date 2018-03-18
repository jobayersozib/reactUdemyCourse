// import React from 'react'
// import ReactDOm from 'react-dom'
import Modal from 'react-modal';
import './styles/style.scss'
import 'normalize.css/normalize.css'
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

ReactDOM.render(routes,document.getElementById("app"));