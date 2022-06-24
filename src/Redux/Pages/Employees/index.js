import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import * as employeeActions from '../../Redux/Actions/EmployeesAction'
import AddEmployee from './addemployee'
const Employees=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(employeeActions.GetEmployees());
       
    },[dispatch])
    const employees = useSelector((state)=>state.employees);
    console.log(employees );
   
    
    return(
            <div className="employees-wrapper">
                <AddEmployee />
                <div className='employess-list'>
                <table className='table table-bordered'>
                    <tr>
                        <th>Emp Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                    {
                       employees && employees.map((employee,idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{employee.EmployeeId}</td>
                                    <td>{ employee.FirstName + ' '+employee.LastName}</td>
                                    <td>{employee.Email}</td>
                                    <td>{employee.PhoneNumber}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                </div>
               
            </div>
    )
}

export default Employees;