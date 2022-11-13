import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import * as employeeActions from '../../Redux/Actions/EmployeesAction'
const EmployeesList=({employees,editEmployee})=>{
    

    return(
         
                <div className='employess-list'>
                <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       employees && employees.map((employee,idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{employee.EmployeeId}</td>
                                    <td>{ employee.FirstName + ' '+ (employee.LastName && employee.LastName)}</td>
                                    <td>{employee.Email}</td>
                                    <td>{employee.PhoneNumber}</td>
                                    <td><div onClick={()=>{editEmployee(employee.id)}}>Edit</div> </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div>
             
    )
}

export default EmployeesList;