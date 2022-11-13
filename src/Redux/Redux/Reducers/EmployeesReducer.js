import initialState from './initialState';
import * as actionTypes from '../Actions/actionTypes'

export default function EmployeesReducer(state = initialState.employees, action) {

    switch (action.type) {
        case actionTypes.GET_EMPLOYEES:
            return action.employees.sort((a, b) => b.EmployeeId - a.EmployeeId);
        case actionTypes.ADD_EMPLOYEES:
            return [...state, { ...action.employee }];
        case actionTypes.GET_EMPLOYEEBYID:
            return action.employee;
        default:
            return state;
    }
}