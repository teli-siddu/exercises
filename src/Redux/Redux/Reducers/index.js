import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import EmployeesReducer from './EmployeesReducer'


const rootReducer=combineReducers({
    counter:counterReducer,
    employees:EmployeesReducer
})

export default rootReducer;