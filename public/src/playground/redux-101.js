import {createStore} from 'redux'

// const add = ({ a, b}) => {
//     return a+b;
// }

// console.log(add({a:1, b:12}))
//Action generators are functions which teyurns the action Object..
const increamentCount = ({increamentBy = 1} = {}) => ({
    type: 'INCREAMENT',
    increamentBy: increamentBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})
const resetCount = () => ({
    type: 'RESET',


});

//Reducers
//Reducers are pure functions that is output only depends on the input
//Never change state or action


const countReducer = (state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREAMENT':
            // const increamentBy = typeof action.increamentBy === 'number' ? action.increamentBy : 1;
            return {
                count:state.count + action.increamentBy
            }
        case 'DECREMENT':
            
                return{
                    count: state.count - action.decrementBy
                }
        case 'RESET':
                    return{
                        count: 0
                    }
                    case 'SET':
                        return{
                            count: action.count
                        }
        default: 
            return state;

    }
};
   


const store = createStore(countReducer);
 
 
      store.subscribe(() => {
        console.log(store.getState());
    });
//Actions is similar to an object that gets sent to the store
//increament decrement reset....

// id like to increament the count...
// store.dispatch({
//     type: 'INCREAMENT',
//     increamentBy: 5
// });
store.dispatch(increamentCount({increamentBy: 5}));

store.dispatch(increamentCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count:101}));



