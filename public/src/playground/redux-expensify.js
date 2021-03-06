import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'
 
//We have to setup all of these actions and this is not to be done with single reducer
//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0          
         
        } = {}
         
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
       id: uuid(),
       description,
       note,
       amount,
       createdAt

    }
});
//REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})
//EDIT_EXPENSE
const editExpense = (id , updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
//SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  
});
//SORT BY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
 });
//SET START DATE

const setStartDate = (startDate) =>({
    type: 'SET_START_DATE',
    startDate
})
//SET END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

})

//Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
           return  [
               ...state,  //spread operater
               action.expense
           ]
           case 'REMOVE_EXPENSE':
             
               return state.filter(({id}) => {
                   return id !== action.id;

               });

               case 'EDIT_EXPENSE':
                   return state.map((expense) => {

                    if(expense.id === action.id){
                        return {
                            ...expense, ...action.updates
                        }
                    }else{
                        return expense;
                    }

                   })
        default:
            return state;
    }
};

//Filters Reducer
const FiltersReducerDefaultState = { 
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate:undefined

}
const filtersReducer = (state = FiltersReducerDefaultState,action) => {
    switch(action.type){

        case 'SET_TEXT_FILTER':
            return {
                ...state, text:action.text
            }
        case 'SORT_BY_AMOUNT':
                return {
                    ...state, sortBy:'amount'
                }
        case 'SORT_BY_DATE':
                   return {
                       ...state, sortBy:'date'
                   }
        case 'SET_START_DATE':
                 return {
                     ...state,startDate:action.startDate
                       }
        case 'SET_END_DATE':
                return {
                    ...state,endDate:action.endDate
                }


        
        default:
            return state
    }

};

//timestamps(milliseconds)
//january 1st 1970(unix epach)
//33345,12,76,-67


//Get visible expenses
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number'|| expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1
        }
        else{
            if(sortBy === 'amount'){
                return a.amount < b.amount ?1 : -1
            }
        }

    })
}



//Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        
    }) 
    
    );
    store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
    })


    const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt: 1000}));
    const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300, createdAt:-1000}));
    
    // store.dispatch(removeExpense(expenseOne.expense.id));  
    
    // store.dispatch(editExpense(expenseTwo.expense.id, { amount:400}));

    // store.dispatch(setTextFilter('ent'));
    // store.dispatch(setTextFilter());
    store.dispatch(sortByAmount());

    // store.dispatch(sortByDate());

    // store.dispatch(setStartDate(0));
    // // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(1999));

 

const demoState = {
  expenses: [{
      id:'efwfwfw',
      description: 'january Rent',
      note: 'this was the final payment for that address',
      amount: 54500,
      createdAt: 0
  }],

  filters: {
      text: 'rent',
      sortBy: 'amount',//date or amount
      startDate: undefined,
      endDate:undefined
  }
};

