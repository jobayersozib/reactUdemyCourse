
import uuid from 'uuid';

export const addExpense=({description='',note='',amount='',createdAt=0}={})=>{
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


export const removeExpense=(id)=>{
    return(
        {
            type:"REMOVE_EXPENSE",
            id:id
        }
    )
}
