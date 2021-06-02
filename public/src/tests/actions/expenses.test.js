import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove expense action object', () => {

    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})
//note {} === {} and [] === [] always reurns false therefore we have to check that va
//lues must be equal therefore we use what called as .toEqual(value) 

test('should set up edit expense action object', () => {

    const action = editExpense('123abc' , {note: 'New note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
     })
});

test('should set up addexpense action object with provided values', () => {
  
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({

        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)

        }
    })
});

test('should setup addexpense action object with default values', () => {
   

    const action = addExpense();
    expect(action).toEqual({

        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)

        }

    })

});