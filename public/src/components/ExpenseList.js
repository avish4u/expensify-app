import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

 export const ExpenseList = (props) => (
     <div>
        {
            props.expenses.length === 0 ? (<p>No Expenses</p>): (
                props.expenses.map((expense) => {
             

                    return <ExpenseListItem key ={expense.id} {...expense} />
                })
            )
        }
         
     </div>
 );

//   export default  connect((state) => {
//       return {
//           expenses : state.expenses
//       }
//   })(ExpenseList);
const mapStateToProps = (state) => {
          return {
              expenses : selectExpenses(state.expenses, state.filters)
          }
};
//Now the props.expenses above contain only those expenses which are filtered and sorted by the 
//function selectExpenses which take the arguments expenses and filters.......
export default connect(mapStateToProps)(ExpenseList);