import {createStore , combineReducers} from 'redux';
import uuid from 'uuid'

// const store=createStore((state={count:10})=>{
//     return state;
// })

// console.log(store.getState())

//ADD_EXPENSE

const addExpense=({description='',note='',amount='',createdAt=0}={})=>{
    return (
        {
            type:"ADD_EXPENSE",
            expense:{
                id:uuid(),
                description,
                note,
                amount,
                createdAt
            }
        }
    )
}

//REMOVE_EXPENSE


const removeExpense=(id)=>{
    return(
        {
            type:"REMOVE_EXPENSE",
            id:id
        }
    )
}

//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


//expenses reducer
const expenseReduceDefaultArray=[]
const filters={
    text:'',
    sortBy:'',
    startDate:undefined,
    endDate:undefined
}
const expenseReducer=(state=expenseReduceDefaultArray,action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return state[state.length-1]=action.expense;
        case "REMOVE_EXPENSE":
            return delete state[action.id];    
        default:
            return state;
    }
}

const filterReducer=(state=filters,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

const store=createStore(combineReducers({
    expenses:expenseReducer,
    filters:filterReducer
}))

console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addExpense({description:"some description ",note:"Some note",amount:300}))
store.dispatch(addExpense({description:"some description 1",note:"Some note 1",amount:400}))
store.dispatch(addExpense({description:"some description 2",note:"Some note 2",amount:500}))
store.dispatch(addExpense({description:"some description 3",note:"Some note 3",amount:600}))
store.dispatch(addExpense({description:"some description 4",note:"Some note 4",amount:700}))
store.dispatch(addExpense({description:"some description 5",note:"Some note 5",amount:800}))


const demoState={
    expenses:[{
        id:1234,
        description:"Some description",
        note:"This is the final payment for address",
        amount:545,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }

}




