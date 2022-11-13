import {handleResponse,handleError} from './apiUtil'

const url='https://my-json-server.typicode.com/teli-siddu/JsonServer/employees';

export function getEmployees(){
   return fetch(url)
   .then(handleResponse)
   .catch(handleError)
}
export function getEmployeeById(empId){
   return fetch(url+"?EmployeeId="+empId)
   .then(handleResponse)
   .catch(handleError)
}

export function addEmployee(employee){
   console.log("api")
   return fetch(url,{
      method:"POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(employee)
   })
   .then(handleResponse)
   .catch(handleError)
}