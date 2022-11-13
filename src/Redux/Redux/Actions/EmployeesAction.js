import * as actionTypes from './actionTypes'
import  {beginApiCall,apiCallError} from './apiStatusAction';
import * as employeeApi from '../../Api/employeeApi'


function GetEmployeesSuccess(employees){
    return {type:actionTypes.GET_EMPLOYEES,employees:employees}
}
export function GetEmployees(){
    return (dispatch)=>{
        dispatch(beginApiCall());
       return employeeApi.getEmployees()
        .then(employees=>{
            dispatch(GetEmployeesSuccess(employees))
        })
        .catch(error=>{
            throw error
        })
    }
}

function GetEmployeeByIdSuccess(employee){
    return {type:actionTypes.GET_EMPLOYEEBYID,employee:employee}
}
export function getEmployeeById(empId){
    return (dispatch)=>{
        dispatch(beginApiCall());
       return employeeApi.getEmployeeById(empId)
        .then(employee=>{
            dispatch(GetEmployeeByIdSuccess(employee))
        })
        .catch(error=>{
            throw error
        })
    }
}

function addEmployeesSuccess(employee){
    return {type:actionTypes.ADD_EMPLOYEES,employee:employee}
}
export function addEmployee(employee){
    console.log("action")
    return (dispatch)=>{
        dispatch(beginApiCall());
       return employeeApi.addEmployee(employee)
        .then(addedEmployee=>{
            dispatch(addEmployeesSuccess(addedEmployee))
        })
        .catch(error=>{
            throw error
        })
    }
}


// export const GetEmployees = () => async (dispatch) => {
//     try {
//       const employees = await employeeApi.getEmployees();
//       dispatch(GetEmployeesSuccess(employees))
//     } catch (err) {
//       console.log(err);
//     }
//   };