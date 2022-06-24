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
// export const GetEmployees = () => async (dispatch) => {
//     try {
//       const employees = await employeeApi.getEmployees();
//       dispatch(GetEmployeesSuccess(employees))
//     } catch (err) {
//       console.log(err);
//     }
//   };