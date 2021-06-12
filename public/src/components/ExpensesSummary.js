import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';



const ExpensesSummary = (props) => {
    
    const expensesCount = props.visibleExpenses.length;
    const expensesTotal = selectExpensesTotal(props.visibleExpenses);
    const finalTotal = (expensesTotal/100).toLocaleString('en-IN', {style:'currency', currency:'INR'})
    const expensesWord = expensesCount ===1 ?'expense' :'expenses' ;

    return (
        <div>
            <h1>Viewing {expensesCount} {expensesWord} totalling {finalTotal}</h1>
        </div>
    );
}



const mapStateToProps = (state) => {
    return{
        visibleExpenses : selectExpenses(state.expenses, state.filters)
    }
    

};

export default connect(mapStateToProps)(ExpensesSummary);

