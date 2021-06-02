import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';


let setTextFilter, sortByDate, sortByAmount, wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
    filters = {filters}
    setTextFilter = {setTextFilter}
    sortByDate = {sortByDate}
    sortByAmount = {sortByAmount}
    
    />)

})

test('should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render expense list filters with alt data correctly', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'bill'
   wrapper.find('input').simulate('change', {
       target: {value}
   });
   expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});
test('should sort by date', () => {
    const value = 'amount'
   
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});