import initialState from './initialState';
import * as actionTypes from '../Actions/actionTypes'

export default function EmployeesReducer(state=initialState.employees,action){

    switch(action.type){
        case actionTypes.GET_EMPLOYEES:
            return action.employees;
        default:
        return state;
    }
}