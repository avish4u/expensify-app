import React from 'react';
import { connect } from 'react-redux';

import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';



export class ExpenseListFilters extends React.Component {
   
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        if(e.target.value === 'date'){
                            this.props.sortByDate()
                            
            
                        }
                        else if(e.target.value === 'amount'){
                            this.props.sortByAmount()
                        }
                    }
   
    render(){

        
       return (

    <div>
    <input type = "text" value = {this.props.filters.text} onChange = {this.onTextChange}/>
    <select value = {this.props.filters.sortBy} onChange = {this.onSortChange}>
                  <option value="date">Date</option>
                  <option value="amount">Amount</option>
            </select>

         
            
            </div>
        );

 
    }
}
   
       


const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}
const mapDispatchToProps = (dispatch) =>({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);